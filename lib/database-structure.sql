/*
  DATABASE SCHEMA — Supabase / PostgreSQL
  ----------------------------------------
  Ready for migration. Run this in your SQL editor.
*/

/*
  USERS TABLE
  - Stores admin and customer accounts
  - Passwords hashed with bcrypt (handled by Supabase Auth)
*/
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

/*
  PRODUCTS TABLE
  - Core product catalog
  - Cloudinary URLs stored in images array
*/
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price INTEGER NOT NULL,
  mrp INTEGER NOT NULL,
  gsm INTEGER,
  sizes TEXT[] DEFAULT '{}',
  sleeve TEXT,
  color TEXT,
  color_hex TEXT,
  description TEXT,
  features TEXT[] DEFAULT '{}',
  in_stock BOOLEAN DEFAULT true,
  images TEXT[] DEFAULT '{}',
  is_new BOOLEAN DEFAULT false,
  is_best_seller BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_slug ON products(slug);

/*
  ORDERS TABLE
  - B2C order records
  - Payment status tracked for Razorpay verification
*/
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address JSONB,
  items JSONB NOT NULL,
  subtotal INTEGER NOT NULL,
  shipping INTEGER DEFAULT 0,
  discount INTEGER DEFAULT 0,
  total INTEGER NOT NULL,
  payment_id TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  order_status TEXT DEFAULT 'pending' CHECK (order_status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

/*
  B2B BOOKINGS TABLE
  - Bulk order requests from wholesale partners
*/
CREATE TABLE b2b_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_number TEXT UNIQUE NOT NULL,
  business_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  gst TEXT,
  address TEXT NOT NULL,
  category TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  size_color_requirements TEXT,
  expected_delivery DATE,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

/*
  CONTACT MESSAGES TABLE
  - Store contact form submissions
*/
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

/*
  NEWSLETTER SUBSCRIBERS TABLE
*/
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
