import { projects } from "@/lib/projects.js";

export default function Projects() {
  return (
    <section id="Projects" className="py-8 max-w-7xl mx-auto">
      <h2>
        <span />
        Proyectos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-input rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              <h3 className="absolute bottom-4 left-4 text-xl md:text-2xl font-semibold z-10">
                {project.title}
              </h3>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-sm flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-background text-primary font-semibold text-xs rounded-full px-3 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href={project.links.demo}
                  title="Enlace a la demo del proyecto"
                  aria-label="Enlace a la demo del proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-background px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition"
                >
                  Demo
                </a>
                <a
                  href={project.links.code}
                  title="Enlace al código del proyecto"
                  aria-label="Enlace al código del proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-primary px-4 py-2 rounded-lg font-semibold border border-primary hover:bg-primary hover:text-background transition"
                >
                  Código
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
