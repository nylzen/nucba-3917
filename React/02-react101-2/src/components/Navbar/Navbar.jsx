import { NavbarItem } from "./NavbarItem";
import './Navbar.css'

export const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Inicio",
      href: "#",
    },
    {
      id: 2,
      title: "Contacto",
      href: "#",
    },
    {
      id: 3,
      title: "Productos",
      href: "#",
    },
  ];

  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          {links.map((link) => (
            // <NavbarItem key={link.id} title={link.title} href={link.href} />
            <NavbarItem key={link.id} {...link}/>
          ))}
        </ul>
      </nav>
    </header>
  );
};
