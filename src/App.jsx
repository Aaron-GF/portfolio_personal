import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      const progress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-background">
        <div className="flex justify-around items-center h-18 relative">
          <h1 className="text-3xl font-bold">
            <span className="text-secondary">A</span>arón
          </h1>
          <Navbar />
          <ModeToggle />
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/20">
            <div
              className="h-full bg-secondary transition-[width] duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="flex justify-around items-center h-30">
        <small className="my-auto">Copyright &copy; 2025 Aaron-GF</small>
        <a
          href="#Hero"
          className="flex justify-center items-center bg-primary size-10 rounded-sm animate-[bounce_2s_infinite]"
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
    </>
  );
}
