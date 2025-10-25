import Header from "@/components/header/Header";

/* secciones */
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/heroo/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Ratings from "@/components/sections/Ratings";

import Footer from "@/components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center w-full h-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Ratings />
      </main>
      <Footer />
    </>
  );
}
