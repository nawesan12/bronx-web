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
            description="Deja tu vehiculo en manos expertas, diagnosticos precisos y reparaciones confiables. Servicio que garantiza tu tranquilidad."
            image="/banner-taller.webp"
          />
          <ServiceCard
            title="Electricidad"
            description="La solucion electrica que necesitas. Hacemos todo tipo de arreglos."
            image="/electricidad.avif"
          />
          <ServiceCard
            title="Lubricentro"
            description="Manténe tu motor en perfecto estado. Aceites y lubricantes de calidad premium. Tu auto merece lo mejor."
            image="/lubricentro.avif"
          />
          <ServiceCard
            title="Venta de Baterias"
            description="Nos encargamos de tu bateria, vos encargate de seguir manejando. Calidad garantizada."
            image="/bateria.avif"
          />
        </section>
      </section>
    </>
  );
}
