import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SpanStyled,
  UserContainerStyled,
  UserNavStyled,
} from "./NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../redux/user/userSlice";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png"
            alt="Logo"
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/">
            <LinkContainerStyled home>
              <HiHome />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled
            onClick={() =>
              currentUser ? dispatch(toggleMenuHidden()) : navigate("/register")
            }
          >
            <SpanStyled>
              {currentUser ? `${currentUser.nombre}` : "Inicia Sesion"}
            </SpanStyled>
            <FaUserAlt />
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
