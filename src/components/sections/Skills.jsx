import { skills } from "@/lib/skills.js";

export default function Skills() {
  return (
    <section id="Skills">
      <h2><span/>Tecnologías</h2>
      <div className="grid grid-cols-1 gap-8">
        {skills.map((category) => (
          <article
            key={category.title}
            className="bg-input/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl transition-colors hover:border-white/10"
          >
            {/* Cabecera de categoría */}
            <h3 className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-bold mb-8 text-center">
              {category.title}
            </h3>

            {/* Contenedor de iconos con Flexbox para que se ajusten solos */}
            <div className="flex flex-wrap justify-center gap-y-8 gap-x-6">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col items-center w-14"
                >
                  {/* Contenedor del Icono */}
                  <div className="relative size-12 flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy" // Mejora de rendimiento
                      width={55}
                      height={55}
                      className={`z-10 filter grayscale opacity-70 transition-all duration-500 ease-out 
    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 
    ${item.className ?? ""}`}
                    />
                  </div>

                  {/* Etiqueta de texto: aparece suavemente al hacer hover */}
                  <span className="mt-2 text-[10px] font-medium text-muted-foreground opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-center whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
