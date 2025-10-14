import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensaje enviado correctamente");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-10">
      <h2>Contacto</h2>
      <form onSubmit={onSubmit} className="flex flex-col justify-center gap-5 max-w-md w-full">
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name"required />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Escribe tu mensaje...</label>
          <textarea type="text" id="message" name="message" required />
        </div>

        <button
          type="submit"
          className="text-background bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/50 rounded-sm text-sm w-full sm:w-auto h-10 text-center cursor-pointer"
        >
          Enviar
        </button>
      </form>
      <span>{result}</span>
    </section>
  );
}
