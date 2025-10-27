import { skills } from "@/lib/skills.js";

export default function Skills() {
  return (
    <section id="Skills">
      <h2>Tecnologías</h2>
      <div className="grid md:grid-cols-2 grid-rows-2 gap-5">
        {skills.map((category) => (
          <div
            key={category.title}
            className="flex justify-center items-center md:gap-6 gap-4 bg-input rounded-lg relative min-h-40 drop-shadow-lg"
          >
            <h3 className="absolute top-6">{category.title}</h3>
            {category.items.map((item) => (
              <div
                key={item.title}
                className="flex relative group size-10 md:size-11 drop-shadow-lg top-3"
              >
                {/* imagen superpuesta para crear efecto brillo al pasar el ratón */}
                <img
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  width={50}
                  height={50}
                  className={`relative z-10 transition-transform cursor-crosshair hover:scale-105 hover:brightness-110 ${
                    item.className ?? ""
                  }`}
                />
                <img
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  width={50}
                  height={50}
                  className="absolute inset-auto z-9 opacity-0 blur-sm transition-all duration-300 pointer-events-none group-hover:opacity-80 group-hover:scale-105 "
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
