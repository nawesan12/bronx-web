import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisController from "@/components/scroll/LenisController";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "El Bronx | Taller Automotor y Lubricentro",
  description:
    "El Bronx es un taller dedicado a todo tipo de soluciones integrales en el rubro automotor y venta de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LenisController>{children}</LenisController>
      </body>
    </html>
  );
}
