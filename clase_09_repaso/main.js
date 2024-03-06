const productos = [
  {
    id: 1,
    nombre: "Smartphone Galaxy S21",
    precio: 799.99,
    stock: 0,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 2,
    nombre: "Camiseta de Algodón",
    precio: 19.99,
    stock: 50,
    categorias: ["Ropa"],
  },
  {
    id: 3,
    nombre: "Juego de Ollas de Acero Inoxidable",
    precio: 149.99,
    stock: 10,
    categorias: ["Hogar", "Cocina"],
  },
  {
    id: 4,
    nombre: "Smart TV 4K 55 pulgadas",
    precio: 699.99,
    stock: 15,
    categorias: ["Electrónica"],
  },
  {
    id: 5,
    nombre: "Zapatillas de Running Nike Air Max",
    precio: 129.99,
    stock: 30,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 6,
    nombre: "Robot Aspiradora Inteligente",
    precio: 299.99,
    stock: 5,
    categorias: ["Hogar", "Tecnología"],
  },
  {
    id: 7,
    nombre: "Tablet Samsung Galaxy Tab A",
    precio: 199.99,
    stock: 25,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 8,
    nombre: "Auriculares Inalámbricos Sony",
    precio: 889.99,
    stock: 40,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 9,
    nombre: "Chaqueta Impermeable Columbia",
    precio: 79.99,
    stock: 20,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 10,
    nombre: "Licuadora de Alta Potencia",
    precio: 49.99,
    stock: 0,
    categorias: ["Hogar", "Cocina"],
  },
];

// 1. Filtrar productos por categoría:
// Filtra los productos para obtener solo aquellos que pertenecen a la categoría "Ropa" / "Tecnologia"

const productosRopa = productos.filter(
  (producto) =>
    producto.categorias.includes("Hogar") &&
    producto.categorias.includes("Cocina")
);

// console.log(productosRopa);

const productosTecnologia = productos.filter((producto) =>
  producto.categorias.includes("Tecnología")
);

const buscarCategoria = (categoria) => {
  const filteredProducts = productos.filter((producto) =>
    producto.categorias.includes(categoria)
  );

  return filteredProducts;
};

// console.log(buscarCategoria("Cocina"));
// console.log(buscarCategoria("Deportes"));
// console.log(buscarCategoria(8));

// 2. Traer en un nuevo array los nombres de los productos. BONUS: Usar destructuring
// const nombreProductos = productos.map((producto) => producto.nombre)
// console.log(nombreProductos)

// const obj = {
//   id: 1,
//   name: 'Messi'
// }
// const nombre = obj.name
// const id = obj.id
// const {name, id} = obj
// console.log({name, id})

// const arr = [1,2,3,true]
// const [pepito, messi] = arr
// console.log(pepito, messi)

// CON DESTRUCTURING

// const nombreProductos = productos.map((producto) => producto.nombre)

const nombreProductos = productos.map(({ nombre }) => nombre);
// console.log(nombreProductos);

// 13. Hacer una función que devuelva un nuevo array con los productos actuales pero que aquellos que valgan mas de $300 tengan un descuento del 50%

const productosConDescuento = productos.map((producto) => {
  const { precio } = producto;

  if (precio > 300) {
    return { ...producto, precioRebaja: precio / 2 };
  } else {
    return producto;
  }
});

// console.log({productos})
// console.log({productosConDescuento})

// const fecha = new Date()
// console.log(fecha)

// 8. Encontrar productos que pertenecen a múltiples categorías:
// Encuentra y muestra los productos que pertenecen a más de una categoría (por ejemplo, "Electrónica" y "Tecnología").

const multipleCategoria = productos.filter(
  (producto) => producto.categorias.length > 1
);
// console.log(multipleCategoria);

// 3. Encontrar productos agotados:
// Encuentra y muestra los productos que tienen un stock igual a 0.

const productosAgotados = productos.filter((producto) => producto.stock === 0);
// console.log(productosAgotados)

// 15. Crear un console.log que liste todos los productos con su nombre, precio, y categorías en un formato legible.

// const informe = productos.forEach(producto => {

//   // Lo que hicimos aca fue desestructurar el objeto que llega por parametro al forEach, para no escribir cada propiedad como producto.tanto
//   const {nombre, precio, categorias} = producto

//   console.log(`
//   Nombre: ${nombre},

//   Precio: ${precio},

//   Categorias: ${categorias.join(' / ')}
//   `)

// })

// 17. Buscar productos por nombre

const buscarProductos = (nombreABuscar) => {
  return productos.filter((producto) => {

    const nombreMinuscula = producto.nombre.toLowerCase();
    const parametroMinuscula = nombreABuscar.toLowerCase();
    const productosEncontrados = nombreMinuscula.includes(parametroMinuscula);

    return productosEncontrados;
  });
};

// console.log(buscarProductos("Smart"));
// console.log(buscarProductos("zapatillas"));

// 4. Calcular el valor total del inventario:
// Calcula el valor total del inventario sumando el precio de todos los productos en stock.

const valorTotalInventario = productos.reduce((total, producto) => {
  return total + (producto.precio * producto.stock)
}, 0)

// console.log(valorTotalInventario)

// 9. Encontrar el producto más caro:
// Encuentra el producto con el precio más alto.

const productoMasCaro = productos.reduce((productoMasCaro, producto) => {
  // return producto.precio > productoMasCaro.precio ? producto : productoMasCaro
  if(producto.precio > productoMasCaro.precio){
    return producto
  } else {
    return productoMasCaro
  }
})

// console.log(productoMasCaro)

// 6. Ordenar productos por precio:
// Ordena los productos por precio de menor a mayor.

const ordenarProductos = productos.sort((a,b) => b.precio - a.precio)
// console.log(ordenarProductos)

// const arr = [1,2,10,20,]
// console.log(arr)

// console.log(arr.sort((a,b) => b - a ))

const div = document.getElementById('content')
