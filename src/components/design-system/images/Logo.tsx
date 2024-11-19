import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo/bronx.png"
      alt="Taller El Bronx"
      width={200}
      height={74}
    />
  );
}
