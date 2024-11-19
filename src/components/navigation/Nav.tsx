"use client";

import { useState } from "react";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="text-[#663399] text-xl flex gap-8">
          <li>
            <a href="#inicio">INICIO</a>
          </li>
          <li>
            <a href="#servicios">SERVICIOS</a>
          </li>
          <li>
            <a href="#ubicacion">UBICACION</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Button */}
      <button className="block lg:hidden" onClick={toggleMenu}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#663399"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={40}
          height={40}
          strokeWidth="1"
        >
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute z-[44] top-16 left-0 w-full bg-white shadow-md">
          <ul className="text-[#663399] bg-white text-xl flex flex-col gap-4 p-4 py-8 font-medium">
            <li>
              <a href="#inicio" onClick={toggleMenu}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={toggleMenu}>
                SERVICIOS
              </a>
            </li>
            <li>
              <a href="#ubicacion" onClick={toggleMenu}>
                UBICACION
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={toggleMenu}>
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
