import { useEffect, useState } from "react";

import { SECTIONS } from "@/lib/sections";

export default function Navbar() {
  const [active, setActive] = useState(SECTIONS[0]?.id ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="relative flex items-center h-full">
      <button
        className="flex items-center justify-center size-10 rounded-md hover:bg-input/70 md:hidden ml-3"
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {!isMenuOpen ? (
          <svg
            className="size-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-7 animate-rotate-in animate-duration-normal"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </button>

      <ul
        className={`
          ${isMenuOpen ? "flex" : "hidden"}
          absolute left-0 top-18 z-30 w-screen
          flex-col justify-around h-70
          bg-background shadow-lg border border-input
          md:static md:flex md:size-full 
          md:flex-row 
          md:bg-transparent md:shadow-none md:border-0 md:rounded-none
        `}
      >
        {SECTIONS.map(({ id, label }) => (
          <li
            key={id}
            className="flex items-center size-full md:justify-center md:px-0 md:py-0 hover:bg-input cursor-pointer hover:text-primary md:w-32"
          >
            <a
              href={`#${id}`}
              aria-label={label}
              onClick={() => setIsMenuOpen(false)}
              className={`
                flex items-center md:justify-center size-full ml-4 md:ml-0
                ${
                  active === id
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }
              `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
