import { projects } from "@/lib/projects.js";

export default function Projects() {
  return (
    <section id="Projects">
      <h2>Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden bg-gray-800 border-2 border-primary drop-shadow-secondary drop-shadow-md min-h-70 cursor-pointer"
          >
            <div className="size-full">
              <img
                src={project.image}
                alt={project.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-20"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent to-secondary px-2">
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="text-xs text-white max-w-19/20">
                {project.description}
              </p>

              {/* tecnologias y herramientas usadas en el proyecto */}
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="flex items-center justify-center bg-background text-primary font-semibold text-xs rounded-lg min-h-5 min-w-1/4"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex gap-6">
                <a
                  href={project.links.demo}
                  title="Enlace a la demo del proyecto"
                  aria-label="Enlace a la demo del proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center size-9 rounded-full bg-background border border-secondary outline-2 outline-background text-primary hover:scale-110 transition-transform"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-5"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
                <a
                  href={project.links.code}
                  title="Enlace al código del proyecto"
                  aria-label="Enlace al código del proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center size-9 rounded-full bg-background border border-secondary outline-2 outline-background text-primary hover:scale-110 transition-transform"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="size-5"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
