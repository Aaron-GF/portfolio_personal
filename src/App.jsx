import { ModeToggle } from "@/components/ui/ModeToggle";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function App() {
  return (
    <>
      <header className="flex justify-around items-center h-18 bg-background fixed z-10 w-full border-b-1 border-primary">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">A</span>arón
        </h1>
        <Navbar />
        <ModeToggle />
      </header>
      <main className="flex flex-col justify-center px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="flex justify-around items-center h-20">
        <small className="my-auto">Copyright &copy; 2025 Aaron-GF</small>
        <a
          href="#Hero"
          className="flex justify-center items-center color-background bg-primary size-7 rounded-sm"
        >
          ^
        </a>
      </footer>
    </>
  );
}
