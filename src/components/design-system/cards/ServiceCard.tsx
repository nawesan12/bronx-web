import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className="bg-[#eee] w-full rounded-xl flex p-4">
      <Image
        src={image}
        alt="Taller El Bronx"
        width={800}
        height={800}
        className="overflow-hidden rounded-xl w-5/12"
      />

      <div className="px-4">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-[#1e1e1e] text-xl">{description}</p>
      </div>
    </article>
  );
}
