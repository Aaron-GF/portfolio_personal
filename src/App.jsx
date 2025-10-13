import { ModeToggle } from "@/components/ui/ModeToggle";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/navbar/Navbar";

export default function App() {
  return (
    <>
      <header className="flex justify-around items-center h-20 bg-background">
        <h1 className="text-2xl font-bold"><span className="text-primary">A</span>arón</h1>
        <Navbar />
        <ModeToggle />
      </header>
      <main className="flex flex-col justify-center px-10">
        <About />
        <Contact />
      </main>
      <footer className="flex justify-around items-center bg-linear-gradient-to-t from-blue-500 to-transparent h-20">
        <small className="my-auto">Copyright &copy; 2025 Aaron-GF</small>
        <a href="#Hero" className="flex justify-center items-center color-background bg-blue-500 size-7 rounded-sm">^</a>
      </footer>
    </>
  );
}
