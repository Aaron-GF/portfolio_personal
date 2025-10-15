import ElectricBorder from "@/components/ui/ElectricBorder";
import SocialLinks from "@/components/sections/Hero/SocialLinks";

export default function Hero() {
  return (
    <section id="Hero" className="flex items-center justify-evenly h-screen">
      <ElectricBorder
        color={"var(--primary)"}
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 100 }}
        className="animate-fade-in"
      >
        <img
          src="/images/me.webp"
          className="h-52 w-50 rounded-full opacity-80 mask-radial-at-top mask-radial-from-70% mask-radial-to-80% mask-b-from-70%"
          alt="Imagen perfil Aarón"
        />
      </ElectricBorder>

      <div className="flex flex-col justify-center gap-5">
        <h2>Aarón García Fernández</h2>
        <p>Desarrollador Web Frontend</p>
        <SocialLinks />
      </div>
    </section>
  );
}
