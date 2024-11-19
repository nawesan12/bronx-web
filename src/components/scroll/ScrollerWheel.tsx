"use client";

import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import Image from "next/image";

export default function ScrollerWheel() {
  const wheelRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code only runs on the client

    const handleScroll = throttle(() => {
      const scrollY = window.scrollY;

      if (scrollY > 700) {
        setIsVisible(true); // Show the image
        if (wheelRef.current) {
          const rotation = scrollY * 0.5; // Adjust rotation speed
          wheelRef.current.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
        }
      } else {
        setIsVisible(false); // Hide the image
      }
    }, 16); // Throttle to 60 FPS (1000ms / 60 ≈ 16ms)

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Image
      ref={wheelRef}
      src="/wheel.svg"
      alt="El Bronx Taller"
      width={170}
      height={170}
      className={`fixed z-20 lg:block md:hidden hidden -right-24 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} // Toggle visibility with opacity
    />
  );
}
