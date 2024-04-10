// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Boton de ver mas
const showMoreBtn = document.querySelector(".btn-load");
// CategoriesContainer
const categoriesContainer = document.querySelector('.categories')
//HTMLCollection de botones con las categorias
const categoriesList = document.querySelectorAll('.category')

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
              <button class="btn-add">Add</button>

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
  appState.currentProductsIndex += 1
  let { products, currentProductsIndex, productsLimit } = appState;
  renderProducts(products[currentProductsIndex]);
  if(currentProductsIndex === productsLimit - 1){
    showMoreBtn.classList.add("hidden")
  }
};

// Logica de filtros
const isInactiveFilterBtn = (element) => {
  return element.classList.contains('category') && !element.classList.contains('active')
}


// Cambiar el color de fondo activo
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList]
  categories.forEach(categoryBtn => {
    if(categoryBtn.dataset.category !== selectedCategory){
      categoryBtn.classList.remove('active')
      return
    }
    categoryBtn.classList.add('active')
  })
}

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category
  changeBtnActiveState(appState.activeFilter)
  console.log(appState)

}

const applyFilter = (e) => {
  if(!isInactiveFilterBtn(e.target)) return
  changeFilterState(e.target)
  productsContainer.innerHTML = ''
  if(appState.activeFilter){
    const filteredProducts = productsData.filter(
      product => product.category === appState.activeFilter
    )
    renderProducts(filteredProducts)
    appState.currentProductsIndex = 0;
    return
  }
  renderProducts(appState.products[0])
}

// [[],[],[]]
const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener('click', applyFilter)
};

init();
