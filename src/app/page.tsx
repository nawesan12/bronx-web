import WhatsappButton from "@/components/design-system/buttons/WhatsappButton";
import Marquee from "@/components/design-system/marquee/Marquee";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollerWheel from "@/components/scroll/ScrollerWheel";
import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Services from "@/components/sections/Services";
import Teaser from "@/components/sections/Teaser";

export default function Home() {
  return (
    <>
      <ScrollerWheel />
      <WhatsappButton />

      <div className="lg:max-w-7xl lg:mx-auto px-4 relative">
        <Header />
        <Hero />
      </div>

      <Marquee />

      <div className="lg:max-w-7xl lg:mx-auto px-4 relative">
        <Services />
      </div>

      <Banner />
      <Teaser />

      <Marquee />

      <div className="lg:max-w-7xl lg:mx-auto px-4 relative">
        <Contact />

        <Location />
      </div>

      <Marquee />

      <div className="lg:max-w-7xl lg:mx-auto px-4 relative">
        <Footer />
      </div>
    </>
  );
}
