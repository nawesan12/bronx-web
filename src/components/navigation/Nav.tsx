export default function Nav() {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="text-[#663399] text-xl flex gap-8">
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">SERVICIOS</a>
          </li>
          <li>
            <a href="">NOSOTROS</a>
          </li>
          <li>
            <a href="">CONTACTO</a>
          </li>
        </ul>
      </nav>

      <button className="block lg:hidden">
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
    </>
  );
}
