export default function Banner() {
  return (
    <section className="my-11 bg-[url('/banner-taller.jpg')] bg-cover p-4 py-40 rounded-xl text-white relative z-40">
      <div className="lg:max-w-xl lg:mx-auto space-y-11">
        <div className="space-y-4 text-2xl font-semibold">
          <h3>El Bronx | Taller Automotor</h3>
          <span className="font-semibold text-xl">Direccion</span>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          recusandae quia maxime, saepe velit beatae quidem, iusto iure impedit
          necessitatibus qui ipsum dolor cumque, vitae totam accusantium
          temporibus sint! Unde.
        </p>
      </div>
    </section>
  );
}
