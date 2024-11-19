"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisController({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = new Lenis();
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}
