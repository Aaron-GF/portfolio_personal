export default function Skills() {
  return (
    <section id="Skills">
      <h2>Tecnologías</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        {/* Lenguajes */}
        <div className="tech-container">
          <h3>Lenguajes</h3>
          <img src="/icons/skills/html.png" alt="icono html" title="HTML" />
          <img src="/icons/skills/css.png" alt="icono css" title="CSS" />
          <img
            src="/icons/skills/js.png"
            alt="icono javascript"
            title="JavaScript"
          />
        </div>

        {/* Frameworks */}
        <div className="tech-container">
          <h3>Frameworks</h3>
          <img
            src="/icons/skills/react.svg"
            alt="icono react"
            title="React"
            className="animate-rotate-infinite"
          />
          <img
            src="/icons/skills/tailwind-css-logo.png"
            alt="icono tailwind"
            title="Tailwind CSS"
          />
          <img
            src="/icons/skills/next.js-wb.png"
            alt="icono next"
            title="Next.js"
          />
          <img src="/icons/skills/redux.png" alt="icono redux" title="Redux" />
        </div>

        {/* Testing */}
        <div className="tech-container">
          <h3>Testing</h3>
          <img src="/icons/skills/jest.svg" alt="icono jest" title="Jest" />
          <img
            src="/icons/skills/react-testing-library.svg"
            alt="icono react testing library"
            title="React Testing Library"
          />
        </div>

        {/* Herramientas */}
        <div className="tech-container">
          <h3>Herramientas</h3>
          <img src="/icons/skills/git.png" alt="icono git" title="Git" />
          <img
            src="/icons/skills/github.png"
            alt="icono github"
            title="GitHub"
          />
          <img src="/icons/skills/vite.png" alt="icono vite" title="Vite" />
          <img
            src="/icons/skills/vscode.png"
            alt="icono vscode"
            title="VSCode"
          />
          <img
            src="/icons/skills/nodejs.svg"
            alt="icono node"
            title="Node.js"
          />
        </div>
      </div>
    </section>
  );
}
