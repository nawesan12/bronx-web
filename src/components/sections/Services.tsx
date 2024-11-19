import ServiceCard from "../design-system/cards/ServiceCard";
import SectionTitle from "../design-system/titles/SectionTitle";

export default function Services() {
  return (
    <>
      <SectionTitle text="Servicios" />
      <section className="my-11 relative z-40">
        <section className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-4">
          <ServiceCard
            title="Reparacion"
            description="lorem ipsum"
            image="/banner-taller.jpg"
          />
          <ServiceCard
            title="Reparacion"
            description="lorem ipsum"
            image="/banner-taller.jpg"
          />
          <ServiceCard
            title="Reparacion"
            description="lorem ipsum"
            image="/banner-taller.jpg"
          />
          <ServiceCard
            title="Reparacion"
            description="lorem ipsum"
            image="/banner-taller.jpg"
          />
        </section>
      </section>
    </>
  );
}
