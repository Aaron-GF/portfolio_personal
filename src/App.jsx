import Header from "@/components/header/Header";

/* secciones */
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

import Footer from "@/components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
