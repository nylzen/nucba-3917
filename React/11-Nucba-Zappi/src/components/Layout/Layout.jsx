import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyles";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // const location = useLocation()
  // console.log(location)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
