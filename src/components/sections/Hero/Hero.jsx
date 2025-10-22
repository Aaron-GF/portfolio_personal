import { useEffect, useState } from "react";
import SocialLinks from "@/components/sections/Hero/SocialLinks";
import { useTheme } from "@/providers/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const prefersDark = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDark, setIsDark] = useState(
    () => theme === "dark" || (theme === "system" && prefersDark())
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsDark(theme === "dark");
      return;
    }

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (event) => setIsDark(event.matches);

      setIsDark(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    setIsDark(theme === "dark");
  }, [theme]);

  const backgroundSrc = isDark
    ? "assets/images/bg-hero-dark.png"
    : "assets/images/bg-hero-light.png";

  return (
    <section
      id="Hero"
      className="relative flex items-center md:flex-row flex-col md:justify-evenly md:gap-0 gap-10 justify-center h-screen w-full overflow-hidden"
    >
      <img
        src={backgroundSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-30 -z-10"
      />
      <div className="bg-gradient-to-t from-background to-secondary rounded-full shadow-md shadow-primary animate-fade-in">
        <img
          src="assets/images/me.webp"
          className="h-52 w-50 rounded-full mask-radial-at-top mask-radial-from-70% mask-radial-to-80% mask-b-from-70%"
          alt="Imagen perfil Aarón"
          fetchPriority="high"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2>Aarón García</h2>
        <p className="text-xl">Desarrollador Web Frontend</p>
        <SocialLinks />
      </div>
    </section>
  );
}
