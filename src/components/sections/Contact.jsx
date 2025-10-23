import React from "react";
import { Spinner, Sent } from "@/components/ui/SendBtn";

export default function Contact() {
  const [status, setStatus] = React.useState("idle"); // idle | loading | success | error
  const [message, setMessage] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Mensaje enviado con éxito!");
        event.target.reset();
      } else {
        throw new Error(data.message ?? "Error al enviar el mensaje");
      }
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    } finally {
      // Oculta el mensaje después de unos segundos
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section
      id="Contact"
      className="flex flex-col justify-center items-center gap-3 scroll-mt-10"
    >
      <h2>Contacto</h2>

      <form
        onSubmit={onSubmit}
        className="relative flex flex-col justify-center gap-5 max-w-md w-full drop-shadow-md"
      >
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="message">Escribe tu mensaje...</label>
          <textarea
            id="message"
            name="message"
            className="resize-none h-20"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`flex items-center justify-center gap-2 text-background font-bold bg-primary hover:bg-primary/80 focus:scale-98 rounded-sm text-sm w-full h-10 transition ${
            status === "loading" ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {status === "loading" ? <Spinner /> : status === "success" ? <Sent /> : "Enviar"}
        </button>
        {status === "error" && (
          <p className={`text-sm font-medium absolute -bottom-10 text-red-500`}>
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
