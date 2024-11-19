import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisController from "@/components/scroll/LenisController";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisController>{children}</LenisController>
      </body>
    </html>
  );
}
