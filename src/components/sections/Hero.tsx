import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-11 space-y-11">
      <Image
        src="/hero-banner.png"
        alt=""
        width={1068}
        height={730}
        className="mx-auto"
        draggable={false}
      />
      <p className="text-center mx-auto max-w-md text-[#663399] text-2xl">
        We guarantee the selection of the best automobile offer on the German
        market, ensuring its technical and legal integrity.
      </p>
    </section>
  );
}
