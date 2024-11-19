import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-6 space-y-11 relative z-40" id="inicio">
      <Image
        src="/hero-banner.webp"
        alt=""
        width={1068}
        height={730}
        className="mx-auto max-h-[620px] w-auto"
        draggable={false}
      />
      <p className="text-center mx-auto max-w-md text-[#663399] text-2xl">
        Garantizamos el mejor servicio de reparacion automovil en{" "}
        <b>Mar del Plata</b> y vendemos productos de alta calidad.
      </p>
    </section>
  );
}
