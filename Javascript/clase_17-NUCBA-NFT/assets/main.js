// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Boton de ver mas
const showMoreBtn = document.querySelector(".btn-load");
// CategoriesContainer
const categoriesContainer = document.querySelector(".categories");
//HTMLCollection de botones con las categorias
const categoriesList = document.querySelectorAll(".category");
// cart btn
const cartBtn = document.querySelector(".cart-label");
// cart es el container del carro
const cartMenu = document.querySelector(".cart");
// contenedor productos carrito
const productsCart = document.querySelector(".cart-container");
//Overlay para tirar facha
const overlay = document.querySelector(".overlay");
// menu (icono)
const menuBtn = document.querySelector(".menu-label");
// menu lista
const menu = document.querySelector(".navbar-list");
// Total de precio en el carrito
const total = document.querySelector(".total");
// cart bubble
const cartBubble = document.querySelector(".cart-bubble");
// Modal
const successModal = document.querySelector(".add-modal");
// Boton comprar
const buyBtn = document.querySelector(".btn-buy");
// Boton vaciar carrito
const deleteBtn = document.querySelector(".btn-delete");

// SETEAMOS EL CARRITO, VACIO
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCartLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// {
//   id: 1,
//   name: "Golden Messi",
//   bid: 6.89,
//   user: "thetroncous",
//   category: "futbol",
//   userImg: "./assets/img/user.png",
//   cardImg: "./assets/img/products/goldenmessi.png",
// },

const createProductTemplate = (product) => {
  // TODO: DATASET EN EL BOTON
  const { id, name, bid, user, userImg, cardImg } = product;
  return `
    <div class="product">
          <img src=${cardImg} alt=${name}/>
          <div class="product-info">

            <div class="product-top">
              <h3>${name}</h3>
              <p>Current Bid</p>
            </div>

            <div class="product-mid">
              <div class="product-user">
                <img src=${userImg} alt="${user}" />
                <p>@${user}</p>
              </div>
              <span>${bid} eTH</span>
            </div>

            <div class="product-bot">

              <div class="offer-time">
                <img src="./assets/img/fire.png" alt="" />
                <p>05:12:07</p>
              </div>
              <button class="btn-add"
              data-id='${id}'
              data-name='${name}'
              data-bid='${bid}'
              data-img='${cardImg}'
              >Add</button>

            </div>
          </div>
        </div>
 `;
};

// Funcion para renderizar productos
const renderProducts = (products) => {
  productsContainer.innerHTML += products.map(createProductTemplate).join("");
};

// Logica para ver mas productos
const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex, productsLimit } = appState;
  renderProducts(products[currentProductsIndex]);
  if (currentProductsIndex === productsLimit - 1) {
    showMoreBtn.classList.add("hidden");
  }
};

// Logica de filtros
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

// Cambiar el color de fondo activo
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  console.log(appState);
};

const applyFilter = (e) => {
  if (!isInactiveFilterBtn(e.target)) return;
  changeFilterState(e.target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    const filteredProducts = productsData.filter(
      (product) => product.category === appState.activeFilter
    );
    renderProducts(filteredProducts);
    appState.currentProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

// Logica menu

// Funcion para mostrar u ocultar el menu
const toggleMenu = () => {
  menu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }

  overlay.classList.toggle("show-overlay");
};

// Funcion para mostrar u ocultar el carro
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (menu.classList.contains("open-menu")) {
    menu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Funcion para cerrar el menu o carro si clickamos  en el overlay
const closeMenuAndCart = () => {
  if (
    menu.classList.contains("open-menu") ||
    cartMenu.classList.contains("open-cart")
  ) {
    menu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};

// Funcion para cerrar el menu si clickeamos en un link del navbar
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  menu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// =======================================
// Logica del carrito
// =======================================
// Funcion para el html
const createCartProductTemplate = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `
  <div class="cart-item">
          <img src="${img}" alt="Nft del carrito" />
          <div class="item-info">
            <h3 class="item-title">${name}</h3>
            <p class="item-bid">Current bid</p>
            <span class="item-price">${bid} ETH</span>
          </div>
          <div class="item-handler">
            <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
         </div>
   </div>
  `;
};

// Funcion para el render
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

// Funcion para obtener el total de la compra
const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0);
};

// Funcion para mostrar el total
const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} ETH`;
};

// Funcion para actualizar la burbuja de cantidad
const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

// Funcion para habilitar o deshabilitar botones
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

// Funcion para updatear el estado del carro
const updateCartState = () => {
  saveCartLocalStorage();
  showCartTotal();
  renderCart();
  renderCartBubble();
  disableBtn(buyBtn)
  disableBtn(deleteBtn)
};

// Funcion para agregar producto
const addProduct = ({ target }) => {
  if (!target.classList.contains("btn-add")) return;
  const product = createProductData(target.dataset);
  //Si el producto ya existe en el carrito vamos a agregar una nueva unidad
  if (isExistingProductInCart(product)) {
    addUnitToProduct(product);
    showSuccessModal("Agregaste una nueva unidad");
  } else {
    createCartProduct(product);
    showSuccessModal("Producto agregado");
  }
  updateCartState();
};

// Funcion para agregar una unidad a un producto que ya tengamos en el carro
// Recorremos el array del carro y buscamos el producto al que le queremos agregar una unidad
// Si el producto que le pasamos por parametro es igual al producto que estamos recorriendo, le sumamos uno a la cantidad, si no es igual, devolvemos el producto tal cual

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

// Funcion para crear el objeto del producto
const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

// Funcion para validar si un producto existe en el array de carrito
const isExistingProductInCart = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (product) => {
  return {
    id: product.id,
    name: product.name,
    img: product.img,
    bid: product.bid,
  };
};

// Funcion para mostrar el modal de compra
const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;

  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

// DATASET es el data-ALGO que agregamos en la etiqueta html
// Devuelve el numero en ms desde 197y algo hasta ahora
// console.log(Date.now())

// Funcion para manejar el evento + del producto en el carrito
const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  //  console.log(id)
  //  console.log(existingCartProduct)
  // El find nos va a devolver el OBJETO del id del producto que queremos sumar la cantidad
  addUnitToProduct(existingCartProduct);
};

// Funcion para manejar el evento - del producto en el carrito
const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("Deseas eliminar el producto?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }

  substractProductUnit(existingCartProduct);
};

// Funcion para restar una unidad al producto
const substractProductUnit = (existingCartProduct) => {
  cart = cart.map((product) => {
    return product.id === existingCartProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

// [1,2,3,4,5]
// 1
// [2,3,4,5]

// Funcion para borar el producto del carro
const removeProductFromCart = (existingCartProduct) => {
  cart = cart.filter((product) => product.id !== existingCartProduct.id);
  updateCartState();
};

// Funcion para manejar la cantidad de los productos en el carro
const handleQuantity = (e) => {
  // console.log(e.target)
  if (e.target.classList.contains("up")) {
    // console.log(e.target.dataset.id)
    handlePlusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("down")) {
    // console.log(e.target.dataset.id)
    handleMinusBtnEvent(e.target.dataset.id);
  }

  updateCartState();
};

// Funcion para vaciar el carro
const resetCartItems = () => {
  cart = [];
  updateCartState();
};

// Funcion para completar la accion del carrito
const completarCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

// Funcion para borrar el carro
const deleteCart = () => {
  completarCartAction(
    "Deseas borrar el carrito?",
    "No hay mas productos en el carro"
  );
};

// Funcion para cuando se complete la compra
const completeBuy = () => {
  completarCartAction("Deseas completar tu compra?", "Gracias por tu compra!");
};

// [[],[],[]]
const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenuAndCart);
  window.addEventListener("scroll", closeMenuAndCart);
  menu.addEventListener("click", closeOnClick);

  // cart
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);

  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  deleteBtn.addEventListener("click", deleteCart);
  buyBtn.addEventListener("click", completeBuy);
  renderCartBubble(cart);
  disableBtn(buyBtn)
  disableBtn(deleteBtn)
};

init();
