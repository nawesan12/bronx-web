import Image from "next/image";
import SectionTitle from "../design-system/titles/SectionTitle";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <>
      <SectionTitle text="Cuenta con Nosotros" />

      <section className="rounded-xl w-full lg:bg-none flex flex-col lg:flex-row justify-between gap-4 my-6 p-4 lg:p-0 relative z-40">
        <Image
          src="/banner-volante.webp"
          alt=""
          width={1000}
          height={1000}
          className="h-96 lg:h-full w-full object-cover overflow-hidden rounded-xl"
        />
        <article className="bg-white rounded-lg w-full p-0">
          <h2 className="font-semibold text-[#663399] text-left text-4xl">
            Dejanos tu consulta
          </h2>

          <section className="flex flex-col lg:flex-row lg:gap-4 mt-4">
            <Input
              placeholder="Nombre completo"
              className="my-2 p-4 h-[60] bg-[#d9d9d9] text-[#000000AA] font-medium"
            />

            <Input
              placeholder="Apellido"
              className="my-2 p-4 h-[60] bg-[#d9d9d9] text-[#000000AA] font-medium"
            />
          </section>

          <section className="flex flex-col lg:flex-row lg:gap-4">
            <Input
              placeholder="Telefono o celular"
              className="my-2 p-4 h-[60] bg-[#d9d9d9] text-[#000000AA] font-medium"
            />
            <Input
              placeholder="Marca de auto y modelo (opcional)"
              className="my-2 p-4 h-[60] bg-[#d9d9d9] text-[#000000AA] font-medium"
            />
          </section>

          <div>
            <Textarea
              placeholder="Deja tu mensaje o consulta"
              className="my-2 p-4 h-[137px] bg-[#d9d9d9] text-[#000000AA] font-medium"
            />
          </div>

          <Button className="w-full h-[60px]">Enviar</Button>
        </article>
      </section>
    </>
  );
}
