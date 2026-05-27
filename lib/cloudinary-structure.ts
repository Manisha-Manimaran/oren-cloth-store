/*
  CLOUDINARY INTEGRATION — Ready Structure
  -----------------------------------------
  Environment variables required:
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

  Image upload URL format:
    https://res.cloudinary.com/<cloud_name>/image/upload/v<version>/<public_id>.<format>

  Usage for optimized images:
    <Image
      src={getOptimizedUrl(product.images[0], 400, 500)}
      alt={product.name}
      width={400}
      height={500}
    />
*/

export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
}

/*
  Generate optimized Cloudinary URL with transformations
  Supports width, height, quality, and format
*/
export function getOptimizedUrl(
  imageUrl: string,
  width: number,
  height?: number,
  quality: number = 80
): string {
  if (!imageUrl.includes("res.cloudinary.com")) return imageUrl;

  const transformations = [
    `w_${width}`,
    `f_auto`,
    `q_${quality}`,
  ];

  if (height) transformations.push(`h_${height}`, "c_fill");

  return imageUrl.replace(
    "/image/upload/",
    `/image/upload/${transformations.join(",")}/`
  );
}

/*
  Placeholder generator for development
  Returns a gradient placeholder div that mimics Cloudinary's blur-up
*/
export function getPlaceholderGradient(seed: string): string {
  const gradients = [
    "from-gray-100 to-gray-200",
    "from-gray-200 to-gray-300",
    "from-gray-50 to-gray-200",
    "from-gray-100 to-gray-300",
  ];
  const index = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return gradients[index % gradients.length];
}

/*
  Upload preset should be configured in Cloudinary Dashboard
  For client-side uploads, use unsigned upload with upload preset:
    cloudinary.v2.uploader.upload(file, {
      upload_preset: 'oren_products',
    })
*/

/*
  Product images folder structure:
    oren/products/round-neck-tees/
    oren/products/rib-neck-tees/
    oren/products/oversized-tees/
    oren/products/trunks/
    oren/products/briefs/
    oren/banners/
    oren/categories/
*/
