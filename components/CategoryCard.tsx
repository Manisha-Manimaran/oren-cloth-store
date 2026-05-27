import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
}

export default function CategoryCard({ name, slug }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${slug}`}
      className="group relative aspect-square bg-accent overflow-hidden block"
    >
      <div className="w-full h-full bg-gradient-to-br from-accent to-gray-300 group-hover:scale-[1.02] transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif text-xl text-white group-hover:translate-x-1 transition-transform duration-300">
          {name}
        </h3>
      </div>
    </Link>
  );
}
