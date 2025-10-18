import { useState } from "react";

export default function SocialLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aarongarcia567@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex gap-2">
      {/* boton para copiar correo */}
      <button
        className="social-btn cursor-pointer"
        data-popover-target="popover-bottom"
        data-popover-placement="bottom"
        onClick={handleCopy}
      >
        {/* icono de correo */}
        {!copied && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="lucide lucide-mail-icon lucide-mail size-6"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        )}

        {/* icono de copiado */}
        {copied && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="lucide lucide-check-check-icon lucide-check-check size-6"
          >
            <path d="M18 6 7 17l-5-5" />
            <path d="m22 10-7.5 7.5L13 16" />
          </svg>
        )}
      </button>

      <div
        data-popover
        id="popover-bottom"
        role="tooltip"
        className="absolute flex flex-col justify-center bg-input text-sm w-64 h-16 text-foreground transition-opacity duration-300 rounded-lg shadow-xs opacity-0"
      >
        <div data-popper-arrow className="bg-border"></div>
        <h3 className="flex items-center justify-center text-secondary bg-border rounded-t-lg h-8">
          Copiar dirección de correo
        </h3>
        <p className="flex items-center justify-center h-10">
          aarongarcia567@gmail.com
        </p>
      </div>

      {/* enlace a linkedin */}
      <a
        href="https://www.linkedin.com/in/aaron-garcia-fernandez/"
        target="_blank"
        className="social-btn"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="lucide lucide-linkedin-icon lucide-linkedin size-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* enlace a github */}
      <a
        href="https://github.com/Aaron-GF"
        target="_blank"
        className="social-btn"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="lucide lucide-github-icon lucide-github size-6"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </a>
    </div>
  );
}
