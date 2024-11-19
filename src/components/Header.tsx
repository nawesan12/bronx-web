import Logo from "./design-system/images/Logo";
import Nav from "./navigation/Nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Logo />

      <Nav />
    </header>
  );
}
