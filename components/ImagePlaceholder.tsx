interface ImagePlaceholderProps {
  className?: string;
  gradient?: string;
  children?: React.ReactNode;
}

export default function ImagePlaceholder({
  className = "w-full h-full",
  gradient,
  children,
}: ImagePlaceholderProps) {
  const grad = gradient || "from-accent to-gray-200";
  return (
    <div
      className={`bg-gradient-to-br ${grad} flex items-center justify-center overflow-hidden ${className}`}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )}
    </div>
  );
}
