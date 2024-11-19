"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (marquee) {
      const items = Array.from(marquee.children) as HTMLElement[];
      const totalWidth = items.reduce((sum, item) => sum + item.offsetWidth, 0);

      // Ensure total width covers the screen
      if (totalWidth < window.innerWidth) {
        const repeats = Math.ceil(window.innerWidth / totalWidth) + 1;

        // Clone and append children to avoid gaps
        for (let i = 0; i < repeats; i++) {
          items.forEach((item) => {
            const clone = item.cloneNode(true) as HTMLElement;
            marquee.appendChild(clone);
          });
        }
      }

      // Animate the marquee
      gsap.to(marquee, {
        x: `-${totalWidth}px`,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="marquee overflow-hidden whitespace-nowrap flex"
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
};

export default Marquee;
