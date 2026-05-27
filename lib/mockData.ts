export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  gsm: number;
  sizes: string[];
  sleeve: "Half Sleeve" | "Full Sleeve" | "NA";
  color: string;
  colorHex: string;
  description: string;
  features: string[];
  inStock: boolean;
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "round-neck-tee-half-sleeve-white",
    name: "Round Neck Tee Half Sleeve",
    category: "Round Neck Tees",
    price: 349,
    mrp: 499,
    gsm: 180,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Half Sleeve",
    color: "White",
    colorHex: "#ffffff",
    description:
      "Premium round neck t-shirt crafted from 180 GSM 100% cotton. Perfect for everyday wear with a relaxed fit and comfortable feel. Features ribbed collar and double-stitched seams for durability.",
    features: [
      "100% Premium Cotton",
      "180 GSM Fabric",
      "Ribbed Collar",
      "Double Stitched Seams",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&auto=format"],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "2",
    slug: "round-neck-tee-half-sleeve-black",
    name: "Round Neck Tee Half Sleeve",
    category: "Round Neck Tees",
    price: 349,
    mrp: 499,
    gsm: 180,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Half Sleeve",
    color: "Black",
    colorHex: "#0a0a0a",
    description:
      "Premium round neck t-shirt crafted from 180 GSM 100% cotton. Perfect for everyday wear with a relaxed fit and comfortable feel.",
    features: [
      "100% Premium Cotton",
      "180 GSM Fabric",
      "Ribbed Collar",
      "Double Stitched Seams",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&auto=format"],
    isBestSeller: true,
  },
  {
    id: "3",
    slug: "round-neck-tee-full-sleeve-white",
    name: "Round Neck Tee Full Sleeve",
    category: "Round Neck Tees",
    price: 399,
    mrp: 599,
    gsm: 180,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Full Sleeve",
    color: "White",
    colorHex: "#ffffff",
    description:
      "Full sleeve round neck tee made from 180 GSM pure cotton. Ideal for cooler days with a clean, structured fit.",
    features: [
      "100% Premium Cotton",
      "180 GSM Fabric",
      "Ribbed Collar",
      "Full Sleeve Design",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop&auto=format"],
    isNew: true,
  },
  {
    id: "4",
    slug: "round-neck-tee-full-sleeve-black",
    name: "Round Neck Tee Full Sleeve",
    category: "Round Neck Tees",
    price: 399,
    mrp: 599,
    gsm: 180,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Full Sleeve",
    color: "Black",
    colorHex: "#0a0a0a",
    description:
      "Full sleeve round neck tee made from 180 GSM pure cotton. Ideal for cooler days with a clean, structured fit.",
    features: [
      "100% Premium Cotton",
      "180 GSM Fabric",
      "Ribbed Collar",
      "Full Sleeve Design",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop&auto=format"],
  },
  {
    id: "5",
    slug: "rib-neck-tee-half-sleeve-white",
    name: "Rib Neck Tee Half Sleeve",
    category: "Rib Neck Tees",
    price: 379,
    mrp: 549,
    gsm: 200,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Half Sleeve",
    color: "White",
    colorHex: "#ffffff",
    description:
      "Trendy rib neck t-shirt with 200 GSM fabric weight. Features a textured ribbed neckline for a modern, elevated look.",
    features: [
      "100% Premium Cotton",
      "200 GSM Fabric",
      "Textured Ribbed Neckline",
      "Double Stitched Seams",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&auto=format"],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "6",
    slug: "rib-neck-tee-half-sleeve-black",
    name: "Rib Neck Tee Half Sleeve",
    category: "Rib Neck Tees",
    price: 379,
    mrp: 549,
    gsm: 200,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Half Sleeve",
    color: "Black",
    colorHex: "#0a0a0a",
    description:
      "Trendy rib neck t-shirt with 200 GSM fabric weight. Features a textured ribbed neckline for a modern, elevated look.",
    features: [
      "100% Premium Cotton",
      "200 GSM Fabric",
      "Textured Ribbed Neckline",
      "Double Stitched Seams",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop&auto=format"],
  },
  {
    id: "7",
    slug: "rib-neck-tee-full-sleeve-grey",
    name: "Rib Neck Tee Full Sleeve",
    category: "Rib Neck Tees",
    price: 429,
    mrp: 649,
    gsm: 200,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Full Sleeve",
    color: "Grey",
    colorHex: "#999999",
    description:
      "Full sleeve rib neck tee with premium 200 GSM cotton. The ribbed collar adds a sophisticated touch to a classic silhouette.",
    features: [
      "100% Premium Cotton",
      "200 GSM Fabric",
      "Textured Ribbed Neckline",
      "Full Sleeve Design",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&h=800&fit=crop&auto=format"],
    isNew: true,
  },
  {
    id: "8",
    slug: "rib-neck-tee-full-sleeve-navy",
    name: "Rib Neck Tee Full Sleeve",
    category: "Rib Neck Tees",
    price: 429,
    mrp: 649,
    gsm: 200,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Full Sleeve",
    color: "Navy",
    colorHex: "#1a2744",
    description:
      "Full sleeve rib neck tee with premium 200 GSM cotton. The ribbed collar adds a sophisticated touch to a classic silhouette.",
    features: [
      "100% Premium Cotton",
      "200 GSM Fabric",
      "Textured Ribbed Neckline",
      "Full Sleeve Design",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1571942651518-1a7d0732ae2f?w=600&h=800&fit=crop&auto=format"],
  },
  {
    id: "9",
    slug: "oversized-tee-black",
    name: "Oversized Tee",
    category: "Oversized Tees",
    price: 499,
    mrp: 749,
    gsm: 220,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Half Sleeve",
    color: "Black",
    colorHex: "#0a0a0a",
    description:
      "Oversized fit t-shirt with 220 GSM heavyweight cotton. Dropped shoulders and relaxed silhouette for that streetwear aesthetic.",
    features: [
      "100% Premium Cotton",
      "220 GSM Heavyweight",
      "Drop Shoulder Design",
      "Oversized Fit",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop&auto=format"],
    isBestSeller: true,
  },
  {
    id: "10",
    slug: "oversized-tee-white",
    name: "Oversized Tee",
    category: "Oversized Tees",
    price: 499,
    mrp: 749,
    gsm: 220,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "Half Sleeve",
    color: "White",
    colorHex: "#ffffff",
    description:
      "Oversized fit t-shirt with 220 GSM heavyweight cotton. Dropped shoulders and relaxed silhouette for that streetwear aesthetic.",
    features: [
      "100% Premium Cotton",
      "220 GSM Heavyweight",
      "Drop Shoulder Design",
      "Oversized Fit",
      "Preshrunk Fabric",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop&auto=format"],
    isNew: true,
  },
  {
    id: "11",
    slug: "trunk-pack-of-3",
    name: "Trunk (Pack of 3)",
    category: "Trunks",
    price: 449,
    mrp: 649,
    gsm: 180,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "NA",
    color: "Black",
    colorHex: "#0a0a0a",
    description:
      "Pack of 3 premium cotton trunks with 180 GSM fabric. Elastic waistband with branded drawcord for superior comfort.",
    features: [
      "100% Premium Cotton",
      "180 GSM Fabric",
      "Elastic Waistband",
      "Branded Drawcord",
      "Pack of 3",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=600&h=800&fit=crop&auto=format"],
  },
  {
    id: "12",
    slug: "brief-pack-of-3",
    name: "Brief (Pack of 3)",
    category: "Briefs",
    price: 349,
    mrp: 499,
    gsm: 180,
    sizes: ["S", "M", "L", "XL", "XXL"],
    sleeve: "NA",
    color: "Black",
    colorHex: "#0a0a0a",
    description:
      "Pack of 3 premium cotton briefs with 180 GSM fabric. Soft elastic waistband with excellent stretch and recovery.",
    features: [
      "100% Premium Cotton",
      "180 GSM Fabric",
      "Soft Elastic Waistband",
      "Excellent Stretch",
      "Pack of 3",
    ],
    inStock: true,
    images: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop&auto=format"],
  },
];

export const categories = [
  { name: "Round Neck Tees", image: "", slug: "round-neck-tees", description: "Classic comfort with premium cotton" },
  { name: "Rib Neck Tees", image: "", slug: "rib-neck-tees", description: "Textured neckline for a modern look" },
  { name: "Oversized Tees", image: "", slug: "oversized-tees", description: "Streetwear aesthetic, relaxed fit" },
  { name: "Trunks", image: "", slug: "trunks", description: "Premium cotton innerwear" },
  { name: "Briefs", image: "", slug: "briefs", description: "Comfortable everyday essentials" },
];

export const bestSellers = products.filter((p) => p.isBestSeller);
export const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

export const sizeGuide = [
  { size: "S", chest: "38", length: "27", shoulder: "17" },
  { size: "M", chest: "40", length: "28", shoulder: "18" },
  { size: "L", chest: "42", length: "29", shoulder: "19" },
  { size: "XL", chest: "44", length: "30", shoulder: "20" },
  { size: "XXL", chest: "46", length: "31", shoulder: "21" },
];

export const allSizes = ["S", "M", "L", "XL", "XXL"];
export const allSleeves = ["Half Sleeve", "Full Sleeve"];
export const allColors = [
  { name: "White", hex: "#ffffff" },
  { name: "Black", hex: "#0a0a0a" },
  { name: "Grey", hex: "#999999" },
  { name: "Navy", hex: "#1a2744" },
];

export const aboutStats = [
  { label: "Years in Business", value: "5+" },
  { label: "Products Sold", value: "50K+" },
  { label: "Happy Customers", value: "10K+" },
  { label: "Pan India Reach", value: "All States" },
];

export const aboutTeam = [
  { name: "Kumaravel P", role: "Founder & CEO", bio: "Visionary entrepreneur with 15+ years in textile manufacturing." },
  { name: "Manisha K", role: "Head of Operations", bio: "Ensuring smooth production and timely deliveries." },
  { name: "Sundar R", role: "Production Head", bio: "Expert in fabric sourcing and quality control." },
  { name: "Priya M", role: "Marketing Lead", bio: "Building the OREN brand across India." },
];
