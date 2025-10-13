import { ModeToggle } from "@/components/ui/ModeToggle";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/navbar/Navbar";

export default function App() {
  return (
    <>
      <header className="flex justify-around items-center h-20 bg-background fixed w-full border-b-1 border-primary">
        <h1 className="text-3xl font-bold"><span className="text-primary">A</span>arón</h1>
        <Navbar />
        <ModeToggle />
      </header>
      <main className="flex flex-col justify-center px-10">
        <About />
        <Contact />
      </main>
      <footer className="flex justify-around items-center bg-gradient-to-t from-primary to-transparent h-20">
        <small className="my-auto">Copyright &copy; 2025 Aaron-GF</small>
        <a href="#Hero" className="flex justify-center items-center color-background bg-blue-500 size-7 rounded-sm">^</a>
      </footer>
    </>
  );
}
