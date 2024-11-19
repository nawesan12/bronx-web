import Image from "next/image";
import SectionTitle from "../design-system/titles/SectionTitle";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <>
      <SectionTitle text="Contacto" />

      <section className="rounded-xl w-full lg:bg-none flex flex-col lg:flex-row justify-between items-center gap-11 my-11 lg:p-4 lg:p-0 relative z-40">
        <Image
          src="/banner-volante.webp"
          alt=""
          width={1000}
          height={1000}
          className="h-96 w-full object-cover overflow-hidden rounded-xl"
        />
        <article className="bg-white rounded-lg w-full lg:w-[700px] space-y-4 p-0 lg:p-4">
          <h2 className="font-semibold text-[#663399] text-center text-2xl">
            DEJANOS TU CONSULTA
          </h2>
          <div>
            <Label>Nombre Completo</Label>
            <Input placeholder="Nombre completo" className="my-2 p-4" />
          </div>

          <div>
            <Label>Telefono</Label>
            <Input placeholder="Telefono o celular" className="my-2 p-4" />
          </div>

          <div>
            <Label>Mensaje</Label>
            <Textarea
              placeholder="Deja tu mensaje o consulta"
              className="my-2 p-4"
            />
          </div>

          <Button className="w-full">Enviar</Button>
        </article>
      </section>
    </>
  );
}
