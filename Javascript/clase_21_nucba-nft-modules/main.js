import { cartActionInit } from "./assets/cart/cart";
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface";
import { productsSectionInit } from "./assets/products-section/products-section";
import { scrollEffectInit } from "./assets/scrollEffect/scroll";
import { typewriterInit } from "./assets/typewriter/typewriter";

//Función inicializadora
const init = () => {
  productsSectionInit();
  cartActionInit();
  menuInterfaceInit()
  typewriterInit()
  scrollEffectInit()
};

init();
