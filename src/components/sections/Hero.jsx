import ElectricBorder from "@/components/ui/ElectricBorder";

export default function Hero() {
  return (
    <section className="flex items-center justify-evenly">
      <ElectricBorder
        color={"var(--primary)"}
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 100 }}
      >
        <img
          src="/images/me.webp"
          className="h-52 w-50 rounded-full opacity-80"
          alt="Imagen perfil Aarón"
        />
      </ElectricBorder>

      <div>
        <h2>Aarón García Fernández</h2>
        <p>Desarrollador Web Frontend</p>
      </div>
    </section>
  );
}
