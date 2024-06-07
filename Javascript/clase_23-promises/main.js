// SetTimeout
const saludar = () => console.log("Hola");

// setTimeout(saludar, 2000);
// setTimeout(() => console.log("Holas"), 3000);

// setInterval
const contar = () => console.log("Contando");

// let intervalId = setInterval(contar, 1000)
// setTimeout(() => clearInterval(intervalId), 3000)

// Reloj con setInterval

const reloj = () => {
  const p = document.getElementById("reloj");
  const fecha = new Date();
  p.textContent = fecha.toLocaleTimeString();
};

// let relojInterval = setInterval(reloj, 1000)

// setTimeout(() => clearInterval(relojInterval), 5000)

// console.log('hola')

// Promesas

// promesa
// .then(si esta todo ok)
// .catch(si esta todo mal)

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('HOlA')
    // reject('Se rompio todo')
  }, 2000);
});

// console.log(promesa)

// promesa
//   .then(respuesta => console.log(respuesta))
//   .catch(error => console.error(`Hubo un error: ${error}`))

// const promesaAleatoria = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let numeroAleatorio = Math.floor(Math.random() * 10);

//     if (numeroAleatorio > 3) {
//       resolve(`El numero ${numeroAleatorio} esta bien`);
//       return;
//     } else {
//       reject(`El numero ${numeroAleatorio} esta mal`);
//       return;
//     }
//   }, 500);
// });

// console.log(promesaAleatoria)

// promesaAleatoria
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// fetch('https://reqres.in/api/users?page=2')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const peliculas = [
  {
    id: 1,
    name: 'Harry Potter'
  },
  {
    id: 2,
    name: "Spider Man"
  },
  {
    id: 3,
    name: 'Interstellar'
  },
  {
    id: 4,
    name: 'Oppenheimer'
  },
  {
    id: 5,
    name: "Querida encogi a los niños"
  }
]

// const peliculas = [];

const getPelicula = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!peliculas.length) {
        reject(new Error(`No hay peliculas`));
      }

      const pelicula = peliculas.find((pelicula) => pelicula.id === id);

      if (!pelicula) {
        reject(new Error(`No existe la pelicula con id ${id}`));
      }

      resolve(pelicula);
    }, 2000);
  });
};

// console.log(getPelicula(3))
getPelicula(2)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));

// console.log(peliculas.find((pelicula) => pelicula.id === 3))
// getPelicula(4)

// GET => traer data
// POST => Agregar data
// PUT => Editar todo data
// DELETE => Borrar data
// PATCH => Editar lo necesario data

// const BASE_URL = 'https://rickandmortyapi.com/api/character'

// fetch(BASE_URL)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(err => console.log(err))

const requestOptions = {
  method: "GET",
  redirect: "follow"
};


fetch("https://rickandmortyapi.com/api/character", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

