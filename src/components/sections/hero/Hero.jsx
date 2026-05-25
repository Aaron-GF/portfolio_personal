import SocialLinks from "@/components/sections/hero/SocialLinks";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-10 md:gap-5 min-h-screen w-full pt-32 pb-16 overflow-x-hidden"
    >
      {/* Blobs de luz CSS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] size-[400px] 2xl:size-[700px] rounded-full bg-secondary/20 blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] right-[-5%] size-[350px] 2xl:size-[600px] rounded-full bg-primary/20 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      {/* Contenedor de Imagen de Perfil */}
      <div className="relative group shrink-0">
        {/* Efecto de resplandor dinámico */}
        <div className="absolute -inset-1.5 bg-linear-to-r from-secondary to-primary rounded-full blur opacity-25 group-hover:opacity-60 transition-opacity duration-1000 animate-[pulse_4s_ease-in-out_infinite]"></div>

        <div className="relative bg-background rounded-full p-1.5 shadow-2xl animate-fade-in">
          <img
            src="images/me.webp"
            width={230}
            height={230}
            className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out size-52 2xl:size-70"
            alt="Aarón García"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Textos y Links */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 px-4">
        <span className="text-xl 2xl:text-2xl font-light tracking-wide text-foreground/70 italic">
          Hola, soy
        </span>

        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-black text-secondary mt-1 mb-2 tracking-tight">
          Aarón García
        </h1>

        <p className="text-xl md:text-2xl 2xl:text-4xl text-muted-foreground font-medium mb-8">
          Desarrollador Web
        </p>

        <div className="animate-fade-in animate-delay-300">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
