import { useState } from "react";

export default function CopyBtn() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aarongarcia567@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      {/* boton para copiar correo */}
      <button
        className="social-btn"
        aria-label="Copiar correo"
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
        className="absolute invisible flex flex-col justify-center bg-input text-sm w-64 h-16 text-foreground transition-opacity duration-300 rounded-lg shadow-xs opacity-0"
      >
        <div data-popper-arrow className="bg-border"></div>
        <h3 className="flex items-center justify-center text-secondary bg-border rounded-t-lg h-8">
          Copiar dirección de correo
        </h3>
        <p className="flex items-center justify-center h-10">
          aarongarcia567@gmail.com
        </p>
      </div>
    </>
  );
}
