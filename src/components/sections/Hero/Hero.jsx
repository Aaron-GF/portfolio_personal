import SocialLinks from "@/components/sections/Hero/SocialLinks";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="flex items-center md:flex-row flex-col md:justify-evenly md:gap-0 gap-10 justify-center h-screen w-full"
    >
      <div className="bg-gradient-to-t from-background to-secondary rounded-full shadow-md shadow-primary animate-fade-in">
        <img
          src="/images/me.webp"
          className="h-52 w-50 rounded-full mask-radial-at-top mask-radial-from-70% mask-radial-to-80% mask-b-from-70%"
          alt="Imagen perfil Aarón"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2>Aarón García</h2>
        <p className="text-white text-xl">Desarrollador Web Frontend</p>
        <SocialLinks />
      </div>
    </section>
  );
}
