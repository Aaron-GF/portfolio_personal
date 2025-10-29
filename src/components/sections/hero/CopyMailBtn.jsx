import { useState } from "react";

export default function CopyBtn() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aarongarcia567@gmail.com");
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      /* setShowToast(false); */
    }, 3000);
  };

  return (
    <>
      {/* boton para copiar correo */}
      <button
        className="social-btn animate-slide-up-fade animate-delay-100"
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
            className="size-6"
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
            className="size-6"
          >
            <path d="M18 6 7 17l-5-5" />
            <path d="m22 10-7.5 7.5L13 16" />
          </svg>
        )}
      </button>

      {!showToast && (
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
      )}

      {/* toast de confirmación de correo copiado */}
      {showToast && (
        <div
          id="toast-success"
          className="fixed top-30 left-1/2 -translate-x-1/2 flex items-center gap-2 max-w-xs px-4 py-2 rounded-md shadow-sm bg-background"
          role="alert"
        >
          <div className="inline-flex items-center justify-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              className="w-5 h-5"
              ariaHidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </div>
          <span className="text-sm">
            Dirección de correo copiada
          </span>
        </div>
      )}
    </>
  );
}
