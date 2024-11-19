import Image from "next/image";
import Logo from "../images/Logo";

const Marquee = () => {
  return (
    <section className="wrapper">
      <article className="item item1">
        <Logo />
      </article>

      <article className="item item2">
        <Image
          src="/logo/bronx-yellow.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </article>

      <article className="item item3">
        <Image
          src="/logo/bronx-cyan.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </article>

      <article className="item item4">
        <Image
          src="/logo/bronx-lila.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </article>

      <article className="item item5">
        <Logo />
      </article>

      <article className="item item6">
        <Image
          src="/logo/bronx-yellow.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </article>

      <article className="item item7">
        <Image
          src="/logo/bronx-cyan.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </article>

      <article className="item item8">
        <Image
          src="/logo/bronx-lila.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </article>
    </section>
  );
};

export default Marquee;
