/*
  RAZORPAY INTEGRATION — Ready Structure
  ---------------------------------------
  Environment variables required:
    NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
    RAZORPAY_KEY_SECRET=your_key_secret

  IMPORTANT: Payment verification MUST happen server-side.
  Never expose RAZORPAY_KEY_SECRET to the client.
*/

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

import crypto from "crypto";

export interface RazorpayOrder {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  attempts: number;
  created_at: number;
}

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

/*
  Client-side: Load Razorpay SDK and open checkout
  Usage: await initRazorpayCheckout({ amount, orderId, prefill })
*/
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export interface CheckoutOptions {
  amount: number;
  orderId: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  callback: (response: RazorpayPaymentResponse) => void;
}

export async function initRazorpayCheckout(options: CheckoutOptions) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    throw new Error("Failed to load Razorpay SDK");
  }

  const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";

  const rzp = new window.Razorpay({
    key: razorpayKeyId,
    amount: options.amount,
    currency: "INR",
    name: "OREN",
    description: "Premium Cotton Clothing",
    order_id: options.orderId,
    prefill: options.prefill,
    theme: {
      color: "#0a0a0a",
    },
    handler: function (response: RazorpayPaymentResponse) {
      options.callback(response);
    },
    modal: {
      ondismiss: function () {
        console.log("Payment modal dismissed");
      },
    },
  });

  rzp.open();
}

/*
  Server-side: Verify payment signature
  This should be called from an API route after payment

  Usage in API route:
    import { verifyPaymentSignature } from '@/lib/razorpay-structure';
    const isValid = verifyPaymentSignature({
      order_id, payment_id, signature
    });
*/
export function verifyPaymentSignature(payload: {
  order_id: string;
  payment_id: string;
  signature: string;
}): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET || "";

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${payload.order_id}|${payload.payment_id}`)
    .digest("hex");

  return expectedSignature === payload.signature;
}

/*
  API Route Example (create in app/api/create-order/route.ts):
  
  import { NextResponse } from 'next/server';
  
  export async function POST(req: Request) {
    const { amount } = await req.json();
    
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    
    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });
    
    return NextResponse.json(order);
  }
*/
