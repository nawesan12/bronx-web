import Logo from "./design-system/images/Logo";

export default function Footer() {
  return (
    <footer className="mt-11 flex  lg:flex-row gap-8 flex-col-reverse justify-between lg:max-w-7xl py-4 items-center">
      <Logo />

      <p className="self-center justify-self-center place-self-center font-medium">
        EL BRONX AUTOMOTORES | MAR DEL PLATA | {new Date().getFullYear()}
      </p>

      <ul className="flex gap-4">
        <li>
          <a
            target="_blank"
            href="https://instagram.com/el_bronx_taller_"
            className="flex gap-2 font-medium items-center"
          >
            Seguinos en{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="40"
              height="40"
              stroke-width="1.7"
            >
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>
            @el_bronx_taller_
          </a>
        </li>
      </ul>
    </footer>
  );
}
