import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "Hero", label: "Inicio" },
  { id: "About", label: "Sobre mí" },
  { id: "Skills", label: "Tecnologías" },
  { id: "Projects", label: "Proyectos" },
  { id: "Contact", label: "Contacto" }
];

export default function Navbar() {
  const [active, setActive] = useState(SECTIONS[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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
    <nav className="h-full">
      <ul className="flex size-full">
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={
                active === id
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
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
