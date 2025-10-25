import Ratings from "./RatingStats";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center flex-col md:flex-row gap-2 h-60 bg-gradient-to-b from-background to-secondary/30">
      <Ratings />
      <a
        href="#Hero"
        aria-label="Volver al inicio"
        title="Volver al inicio"
        className="flex justify-center items-center bg-primary size-10 rounded-sm animate-[bounce_2s_infinite] drop-shadow-lg"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="lucide lucide-arrow-up-icon lucide-arrow-up size-7 text-background"
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </a>
    </footer>
  );
}
