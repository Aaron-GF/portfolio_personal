import { ModeToggle } from "@/components/ui/ModeToggle";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <>
      <header className="flex justify-end p-10">
        <ModeToggle />
      </header>
      <main>
        <About />
        <Contact />
      </main>
      <footer className="text-center bg-linear-gradient-to-t from-primary to-transparent">
        <small>Copyright &copy; 2025 Aaron-GF</small>
        <a href="#Hero" className="inline-flex justify-center color-background bg-primary p-2 rounded-sm">^</a>
      </footer>
    </>
  );
}
