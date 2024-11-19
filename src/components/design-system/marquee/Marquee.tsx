"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this code runs only on the client
    if (typeof window !== "undefined") {
      const marquee = marqueeRef.current;

      if (marquee) {
        const totalWidth = marquee.scrollWidth; // Calculate total width of content
        const containerWidth = marquee.offsetWidth; // Visible container width

        // Duplicate content to fill any gaps
        if (totalWidth < containerWidth) {
          const repeats = Math.ceil(containerWidth / totalWidth) + 1; // Extra repeat for seamless effect
          for (let i = 0; i < repeats; i++) {
            const clonedContent = marquee.innerHTML;
            marquee.innerHTML += clonedContent; // Append duplicated content
          }
        }

        // Use GSAP to animate the marquee
        gsap.to(marquee, {
          x: `-${totalWidth}px`, // Move marquee to the left
          ease: "none", // Linear scrolling
          duration: 20, // Duration depends on speed
          repeat: -1, // Infinite loop
        });
      }
    }
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="marquee-container overflow-hidden whitespace-nowrap flex"
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default Marquee;
