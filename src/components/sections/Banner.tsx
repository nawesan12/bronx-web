export default function Banner() {
  return (
    <section className="mt-11 bg-[url('/banner-graffiti.webp')] bg-contain h-[820px] p-4 py-40 text-white relative z-40">
      <div className="lg:max-w-7xl lg:mx-auto space-y-11">
        <div className="space-y-4 text-4xl font-semibold">
          <h3>Bronx | Taller Automotor</h3>
          <span className="font-semibold text-xl">
            Bordabehere 2978, Mar del Plata
          </span>
        </div>
        <p className="text-xl lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          recusandae quia maxime, saepe velit beatae quidem, iusto iure impedit
          necessitatibus qui ipsum dolor cumque, vitae totam accusantium
          temporibus sint! Unde.
        </p>
      </div>
    </section>
  );
}
