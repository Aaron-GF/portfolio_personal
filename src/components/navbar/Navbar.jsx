import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "Hero", label: "Inicio" },
  { id: "About", label: "Sobre mí" },
  { id: "Skills", label: "Tecnologías" },
  { id: "Projects", label: "Proyectos" },
  { id: "Contact", label: "Contacto" },
];

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
        className="flex items-center justify-center size-10 rounded-md hover:bg-input/70 md:hidden"
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
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
      </button>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex md:size-full md:space-x-6 flex-col md:flex-row absolute md:static left-0 top-14 md:w-auto bg-background md:bg-transparent shadow-lg md:shadow-none border border-input md:border-0 md:rounded-none z-30 w-screen`}
      >
        {SECTIONS.map(({ id, label }) => (
          <li
            key={id}
            className="flex items-center md:justify-center md:px-0 h-8 md:h-full md:py-0 hover:bg-input cursor-pointer hover:text-primary md:w-30"
          >
            <a
              href={`#${id}`}
              onClick={() => setIsMenuOpen(false)}
              className={
                active === id
                  ? "flex items-center md:justify-center text-primary font-semibold size-full"
                  : "flex items-center md:justify-center text-foreground size-full hover:text-primary"
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
