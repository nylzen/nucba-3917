const books = [
  {
    name: "Dune",
    author: "Frank Herbert",
    year: "1965",
    price: "9.99",
  },
  {
    name: "Foundation",
    author: "Isaac Asimov",
    year: "1951",
    price: "7.99",
  },
  {
    name: "Ender's Game",
    author: "Orson Scott Card",
    year: "1985",
    price: "8.99",
  },
  {
    name: "1984",
    author: "George Orwell",
    year: "1949",
    price: "6.99",
  },
  {
    name: "Brave New World",
    author: "Aldous Huxley",
    year: "1932",
    price: "5.99",
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: "1979",
    price: "7.49",
  },
  {
    name: "Neuromancer",
    author: "William Gibson",
    year: "1984",
    price: "8.49",
  },
  {
    name: "Snow Crash",
    author: "Neal Stephenson",
    year: "1992",
    price: "9.99",
    category: "Science Fiction",
  },
  {
    name: "The Martian",
    author: "Andy Weir",
    year: "2011",
    price: "7.99",
    category: "Science Fiction",
  },
  {
    name: "Ready Player One",
    author: "Ernest Cline",
    year: "2011",
    price: "6.99",
    category: "Science Fiction",
  },
];


const orderBookByPrice = (books) => {
  return books.sort((a, b) => b.name.localeCompare(a.name))
}

const preciosOrdenados = orderBookByPrice(books)

console.log(preciosOrdenados)

// console.log(books.filter(book => book.category === "Science Fiction"))

const container = document.querySelector(".container")

// return (
//   <h1>
//     {user.name}
//   </h1>
// );

const renderBooks = ({name, author, year, price}) => {
  container.innerHTML = books.map((book) => {
    return `
      <div class="book">
        <h2>${book.name}</h2>
        <p>Author: ${book.author}</p>
        <p>Year: ${book.year}</p>
        <p>Price: ${book.price}</p>
      </div>
    `
  }).join('')
}

renderBooks(books)

const categories = document.querySelector(".categories")
const showBTN = document.querySelector('#mostrar')

showBTN.addEventListener('click', () => {
  categories.classList.toggle('show')
  showBTN.textContent = 'Ocultar'
})

const obj = {
  name: 'Juan',
  age: 20,
  country: 'Argentina'
}

const showName = ({name}) => {
  console.log(name)
}

showName(obj)

const useState = ( algo ) => {
  return [algo, () => console.log('Hola')]
}


const [algo, setAlgo] = useState('Messi')

console.log(algo)
setAlgo()





// function MyButton({name = 'boton'}) {
//   return (
//   button.innerHTML = name
//   );
// }

const user = {
  name: 'Messi',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuC051cvs94uSAvxd-ME0Ee_yMcUQyU25DZibhx3DBlg&s',
  imageSize: 90,
};

const userContainer = document.querySelector('.user-container');

const renderUser = ({name, imageUrl, imageSize}) => {
  userContainer.innerHTML = `
    <h1>${name}</h1>
    <img src="${imageUrl}" alt="${name}" width="${imageSize}" />
  `
}

renderUser(user)

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Foto de ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// const Button = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
//   cursor: pointer;
// `;

{/* <Button></Button> */}

// window.addEventListener('DOMContentLoaded', () => alert('holi'))