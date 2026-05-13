import { useEffect, useState } from "react";
import SocialLinks from "@/components/sections/hero/SocialLinks";
import { useTheme } from "@/providers/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  
  // Lógica del tema.
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    if (theme === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches;
    return theme === "dark";
  });

  useEffect(() => {
    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = (e) => setIsDark(e.matches);
      setIsDark(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <section
      id="Hero"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-10 md:gap-0 h-screen w-full mt-30 md:mt-10"
    >
        {/* Contenedor de Imagen de Perfil */}
      <div className="relative group">
        {/* Efecto de resplandor de fondo */}
        <div className="absolute -inset-1 bg-linear-to-r from-secondary to-primary rounded-full blur opacity-25 group-hover:opacity-50 transition animate-duration-[4000ms] animate-pulse"></div>
        
        <div className="relative bg-background rounded-full p-1 shadow-2xl animate-fade-in">
          <img
            src="images/me.webp"
            width={230}
            height={230}
            className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            alt="Aarón García"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Textos y Social */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
        <span className="text-xl font-light tracking-wide">Hola, soy</span>
        <h1 className="text-2xl md:text-4xl font-bold text-secondary mt-1 mb-2 tracking-tight">
          Aarón García
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
          Desarrollador Web
        </p>
        
        <div className="animate-fade-in animate-delay-200">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}