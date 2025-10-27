const STAR_PATH = 
  "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

export function StarIcon({ filled, onClick, interactive = false, className = "" }) {
  const baseClass = `size-5 ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`;
  const colorClass = filled ? "text-primary" : "text-ring";
  return (
    <svg
      className={`${baseClass} ${colorClass} ${className}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 22 20"
      onClick={onClick}
    >
      <path d={STAR_PATH} />
    </svg>
  );
}