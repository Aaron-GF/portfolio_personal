export default function About() {
  return (
    <section
      id="About"
      className="w-full bg-input shadow-md p-8 flex flex-col md:min-h-[70vh] gap-6 md:gap-8 md:p-12 mb-16 md:mb-24 scroll-mt-24"
    >
      {/* Contenedor centrado y con ancho máximo */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 w-full">
        <h2>
          <span />
          Sobre mí
        </h2>
        <div className="text-foreground space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            Mi nombre es Aarón, desde hace tiempo me atrae el mundo de la programación y la tecnología. Aunque mi camino profesional inicial tomó otra dirección, siempre tuve presente mi interés como desarrollador. Hoy estoy enfocado en aprender y mejorar mis habilidades.
          </p>
          <p>
            Práctico constantemente con cursos y proyectos personales, de momento enfocado en front-end y aprendizaje continuo de nuevas tecnologías. En esta web comparto los proyectos en los que trabajo, como reflejo de mi proceso de aprendizaje y crecimiento.
          </p>
          <p>
            El sitio ha sido creado con Vite, React y TailwindCSS, siguiendo un diseño moderno y responsivo que se adapta a diferentes dispositivos. Cada detalle está pensado para mejorar funcionalidad, estética y rendimiento.
          </p>
        </div>
      </div>
    </section>
  );
}
