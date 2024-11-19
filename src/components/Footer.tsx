import Logo from "./design-system/images/Logo";

export default function Footer() {
  return (
    <footer className="mt-11 flex  lg:flex-row gap-8 flex-col-reverse justify-between lg:max-w-7xl py-4 items-center">
      <Logo />

      <p className="self-center justify-self-center place-self-center font-medium">
        EL BRONX AUTOMOTORES | MAR DEL PLATA | {new Date().getFullYear()}
      </p>

      <ul className="flex gap-4">
        <li>@elbronx</li>
        <li>@elbronx</li>
      </ul>
    </footer>
  );
}
