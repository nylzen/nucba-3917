import * as s from "./NavbarStyles";
import { IoMdHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <a href="#">
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png"
          alt=""
        />
      </a>
      <s.LinksContainer>
        <s.HomeContainer>
          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="#">
              <s.LinkContainer>
                <IoMdHome />
              </s.LinkContainer>
              Home
            </a>
          </motion.div>
        </s.HomeContainer>

        <s.UserNav>
          <s.UserContainer>
            <s.SpanStyled>Inicia sesion</s.SpanStyled>
            <FaUserAlt />
          </s.UserContainer>
        </s.UserNav>

        <motion.div whileTap={{ scale: 0.95 }}>
          <s.MenuContainer>
            <IoMenu />
          </s.MenuContainer>
        </motion.div>
      </s.LinksContainer>
    </s.HeaderContainer>
  );
};
