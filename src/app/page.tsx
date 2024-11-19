import Logo from "@/components/design-system/images/Logo";
import Marquee from "@/components/design-system/marquee/Marquee";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LenisController from "@/components/scroll/LenisController";
import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Teaser from "@/components/sections/Teaser";
import Image from "next/image";

export default function Home() {
  return (
    <LenisController>
      <Header />
      <Hero />

      <Marquee>
        <Logo />
        <Image
          src="/logo/bronx-yellow.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
        <Image
          src="/logo/bronx-cyan.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
        <Image
          src="/logo/bronx-lila.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </Marquee>

      <Services />
      <Banner />

      <Marquee>
        <Logo />
        <Image
          src="/logo/bronx-yellow.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
        <Image
          src="/logo/bronx-cyan.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
        <Image
          src="/logo/bronx-lila.png"
          alt="Taller El Bronx"
          width={200}
          height={74}
        />
      </Marquee>

      <Teaser />

      <Contact />
      <Footer />
    </LenisController>
  );
}
