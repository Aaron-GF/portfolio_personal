export default function About() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;

  const chatImage = (
    <img
      width={40}
      height={40}
      className="rounded-full"
      src="/images/me.webp"
      alt="imagen perfil formato chat"
    />
  );

  /* visualización tipo bubble chat */
  const ChatMessage = ({ children, image, ml, rounded, mt }) => (
    <div className={`flex items-start gap-3 mb-2 ${ml ? "ml-13" : ""} ${mt ? "mt-3" : ""}`}>
      {image && image}
      <div
        className={`flex flex-col py-2 px-4 bg-input ${rounded ? "rounded-2xl" : "rounded-e-2xl rounded-es-2xl"}`}
      >
        <span className="text-sm text-ring">{currentTime}</span>
        <p className="py-2">{children}</p>
      </div>
    </div>
  );

  return (
    <section id="About">
      <h2>
        <span />
        Sobre mí
      </h2>

      <ChatMessage image={chatImage} mt>
        👋 Mi nombre es Aarón, desde hace tiempo me atrae el mundo de la
        programación y la tecnología.
      </ChatMessage>

      <ChatMessage ml rounded>
        Aunque mi camino profesional inicial tomó otra dirección, siempre tuve
        presente mi interés como desarrollador.
      </ChatMessage>

      <ChatMessage ml rounded>
        Hoy estoy enfocado en aprender y mejorar mis habilidades.
      </ChatMessage>

      <ChatMessage image={chatImage} mt>
        Práctico constantemente con cursos y proyectos personales, de momento
        enfocado en front-end y aprendizaje continuo de nuevas tecnologías.
      </ChatMessage>

      <ChatMessage ml rounded>
        En esta web comparto los proyectos en los que trabajo, como reflejo de
        mi proceso de aprendizaje y crecimiento.
      </ChatMessage>

      <ChatMessage image={chatImage} mt>
        El sitio ha sido creado con Vite, React y TailwindCSS, siguiendo un
        diseño moderno y responsivo que se adapta a diferentes dispositivos.
      </ChatMessage>

      <ChatMessage ml rounded>
        Cada detalle está pensado para mejorar funcionalidad, estética y
        rendimiento.
      </ChatMessage>
    </section>
  );
}
