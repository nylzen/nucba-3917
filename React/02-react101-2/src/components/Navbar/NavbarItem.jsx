// eslint-disable-next-line react/prop-types
export const NavbarItem = ({href,title}) => {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};
