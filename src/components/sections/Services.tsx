import ServiceCard from "../design-system/cards/ServiceCard";
import SectionTitle from "../design-system/titles/SectionTitle";

export default function Services() {
  return (
    <>
      <SectionTitle text="Servicios" />
      <section className="my-6 relative z-40">
        <section className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-4">
          <ServiceCard
            title="Taller Automotriz"
            description="lorem ipsum"
            image="/banner-taller.webp"
          />
          <ServiceCard
            title="Lubricentro"
            description="lorem ipsum"
            image="/banner-taller.webp"
          />
          <ServiceCard
            title="Electricidad"
            description="lorem ipsum"
            image="/banner-taller.webp"
          />
          <ServiceCard
            title="Venta de Baterias"
            description="lorem ipsum"
            image="/banner-taller.webp"
          />
        </section>
      </section>
    </>
  );
}
