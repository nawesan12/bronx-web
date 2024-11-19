export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=2235216871&text=Hola,%20El%20Bronx!%20Quiero%20hacer%20una%20consulta"
      target="_blank"
      className="size-11 lg:size-24 rounded-full z-[44] fixed shadow-md shadow-slate-700 bottom-6 right-6 bg-green-600 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="40"
        height="40"
        strokeWidth="2"
      >
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
      </svg>
    </a>
  );
}
