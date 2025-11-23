import { Suspense, lazy } from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/sections/hero/Hero";
import Footer from "@/components/footer/Footer";
import { Spinner } from "@/components/ui/SendBtn";

/* secciones lazy */
const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Ratings = lazy(() => import("@/components/sections/Ratings"));

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center w-full h-auto">
        <Hero />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-40 w-full">
              <Spinner />
            </div>
          }
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Ratings />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
