import * as s from "./FooterStyles";

const footerLinks = [
  {
    id: 1,
    title: "Terminos de uso",
    path: "#",
  },
  {
    id: 2,
    title: "Trabaja con nosotros",
    path: "#",
  },
  {
    id: 3,
    title: "Soporte",
    path: "#",
  },
];

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.LinksContainer>
        {footerLinks.map(link => (
          <a key={link.id} href={link.path}>{link.title}</a>
        ))}
      </s.LinksContainer>

      <p>Hecho con ❤️ en <span>Nucba</span></p>
    </s.FooterContainer>
  );
};
