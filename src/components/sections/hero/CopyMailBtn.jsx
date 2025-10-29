import { useState } from "react";

export default function CopyBtn() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [animation, setAnimation] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("aarongarcia567@gmail.com");
    setCopied(true);
    setShowToast(true);
    setAnimation("animate-zoom-in");

    setTimeout(() => {
      setAnimation("animate-zoom-out");
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 500);
    }, 4500);
  };

  return (
    <>
      {/* boton para copiar correo */}
      <button
        className="social-btn animate-slide-up-fade animate-delay-100"
        aria-label="Copiar correo"
        title="Copiar dirección decorreo electrónico"
        onClick={handleCopy}
        disabled={copied}
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

      {/* toast de confirmación de correo copiado */}
      {showToast && (
        <div
          id="toast-success"
          className={`fixed top-20 left-5 flex items-center gap-2 max-w-xs px-4 py-2 rounded-md shadow-sm bg-background ${animation}`}
          role="alert"
        >
          <div className="inline-flex items-center justify-center size-8 text-green-500 bg-green-100 rounded-md dark:bg-green-800 dark:text-green-200">
            <svg
              className="size-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </div>
          <span className="text-sm">Dirección de correo copiada</span>
        </div>
      )}
    </>
  );
}
