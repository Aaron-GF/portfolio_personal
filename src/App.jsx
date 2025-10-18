import { ModeToggle } from "@/components/ui/ModeToggle";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function App() {
  return (
    <>
      <header className="flex justify-around items-center h-18 bg-background fixed z-10 w-full border-b-1 border-primary">
        <h1 className="text-3xl font-bold">
          <span className="text-secondary">A</span>arón
        </h1>
        <Navbar />
        <ModeToggle />
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
