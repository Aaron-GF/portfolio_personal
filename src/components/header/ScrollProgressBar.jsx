import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;
          const totalScrollable = scrollHeight - clientHeight;
          const progress =
            totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
          setScrollProgress(progress);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-full bg-secondary transition-[width] duration-150 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
