import SectionTitle from "../design-system/titles/SectionTitle";

export default function Location() {
  return (
    <>
      <SectionTitle text="Ubicacion" />
      <section className="my-6 relative z-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.908696409089!2d-57.59683392325849!3d-37.989839844123125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9c4309ec0e9%3A0xb82d934bf18fa071!2sTaller%20Bronx%20-Lubricentro-Mec%C3%A1nica-Electricidad-Venta%20de%20Bater%C3%ADas-%20Mar%20del%20Plata!5e1!3m2!1ses!2sar!4v1732034668499!5m2!1ses!2sar"
          width="600"
          height="450"
          loading="lazy"
          className="w-full rounded-xl"
        ></iframe>
      </section>
    </>
  );
}
