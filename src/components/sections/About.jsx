import { useState, useEffect } from "react";

export default function About() {
  const [currentTime, setCurrentTime] = useState("");

  // Actualizar la hora al montar el componente
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    // Actualiza la hora cada minuto
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const ChatAvatar = () => (
    <div className="relative shrink-0">
      <img
        width={40}
        height={40}
        className="rounded-full object-cover shadow-md border border-white/10 size-8 md:size-10 2xl:size-12"
        src="/images/me.webp"
        alt="Aarón"
      />
      {/* Indicador de estado ONLINE en la esquina de la foto */}
      <span className="absolute bottom-0 right-0 flex size-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-green-500 border-2 border-background"></span>
      </span>
    </div>
  );

  /* Componente interno para el chat estilo buble */
  const ChatMessage = ({ children, isFirst = false }) => (
    <div
      className={`flex items-start gap-3 mb-2 ${isFirst ? "mt-6" : "ml-[54px] md:ml-[66px] 2xl:ml-[76px]"}`}
    >
      {/* Solo muestra la imagen si es el inicio de un bloque de mensajes */}
      {isFirst && <ChatAvatar />}

      <div
        className={`flex flex-col py-2 px-4 bg-input/80 backdrop-blur-sm border border-white/5 shadow-sm
          ${isFirst ? "rounded-e-2xl rounded-es-2xl" : "rounded-2xl"}`}
      >
        <p className="text-sm md:text-base 2xl:text-lg leading-relaxed text-foreground/90">
          {children}
        </p>
        <span className="text-[10px] text-foreground/40 text-right font-mono">
          {currentTime}
        </span>
      </div>
    </div>
  );

  return (
    <section id="About" className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="flex items-center gap-3 mb-8">
        <span className="relative flex h-3 w-3"></span>
        Sobre mí
      </h2>

      <div className="flex flex-col">
        {/* Bloque 1: Presentación */}
        <ChatMessage isFirst>
          👋 Mi nombre es Aarón, desde hace tiempo me atrae el mundo de la
          programación y la tecnología.
        </ChatMessage>
        <ChatMessage>
          Aunque mi camino profesional inicial tomó otra dirección, siempre tuve
          presente mi interés como desarrollador.
        </ChatMessage>
        <ChatMessage>
          Hoy estoy enfocado en aprender y mejorar mis habilidades.
        </ChatMessage>

        {/* Bloque 2: Actualidad */}
        <ChatMessage isFirst>
          Actualemente estoy cursando la FP superior de desarrollo de
          aplicaciones web, además de realizar cursos en otras plataformas,
          practicar con proyectos personales y retos de programación.
        </ChatMessage>
        <ChatMessage>
          En esta web comparto los proyectos en los que trabajo, como reflejo de
          mi proceso de aprendizaje y crecimiento.
        </ChatMessage>

        {/* Bloque 3: Sobre la web */}
        <ChatMessage isFirst>
          El sitio ha sido creado con Vite, React y TailwindCSS, siguiendo un
          diseño moderno y responsivo que se adapta a diferentes dispositivos.
        </ChatMessage>
        <ChatMessage>
          Cada detalle está pensado para mejorar funcionalidad, estética y
          rendimiento.
        </ChatMessage>
      </div>
    </section>
  );
}
