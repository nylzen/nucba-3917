// Traer los elementos del DOM
const loginForm = document.getElementById('login--form')
const emailInput = document.getElementById('email')
const passInput = document.getElementById('password')
const errorMessage = document.getElementById('form__error')

// Me traigo los usuarios del local para poder comparar lo que estoy escribiendo en el login
const users = JSON.parse(localStorage.getItem('users')) || []
// console.log(users[0])

// Funcion para guardar en el SessionStorage
const saveToSessionStorage = (user) => {
  sessionStorage.setItem('activeUser', JSON.stringify(user))
}

// Funcion para validar que el campo no este vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};


// Funcion para validar que el email exista
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim())
}

// Funcion para validar si la password que ingresamos es igual a la que registramos en el email
const isMatchingPass = (input) => {
  const user = users.find(user => user.email === emailInput.value.trim())

  return user.password === input.value.trim()
}


// Funcion para mostrar el error
const showError = (message) => {
  errorMessage.textContent = message
}

const isValidAccount = () => {
  let valid = false

  // mail
  if(isEmpty(emailInput)){
    showError('Por favor llena los campos')
    return
  }

  if(!isExistingEmail(emailInput)){
    showError('El email ingresado no es valido')
    return
  }

  // pass
  if(isEmpty(passInput)){
    showError('Por favor llena los campos')
    return
  }

  if(!isMatchingPass(passInput)){
    showError('Los datos ingresados son incorrectos')
    return
  }


  alert('Ya estas en linea')
  valid = true;
  errorMessage.textContent = ''
  return valid
}

// Funcion login
const login = (e) => {
  e.preventDefault()

  // Si la cuenta es valida loguee, me mande al index y me guarde la session
  if(isValidAccount()){
    // console.log('valido')
    const user = users.find(user => user.email === emailInput.value.trim())
    // console.log(user)
    saveToSessionStorage(user)
    window.location.href = '../pages/home.html'

  }

}

// Funcion init
const init = () => {
  loginForm.addEventListener('submit', login)
}

init()
