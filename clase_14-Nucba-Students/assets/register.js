/*
  Validaciones a realizar:
  - Que el campo no este vacio
  - que el email sea correcto
  - que la contrasena cumpla con x caracteres simbolos
  - Cantidad de caracteres para nombre apellido y telefono
  - Que el email no exista en el LS (Base de datos precaria)

  Funciones para mostrar el error y el exito de un campo
*/

// githubcopilot, tabnine, codeium

// Nos traemos los elementos necesarios del DOM
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");


const users = JSON.parse(localStorage.getItem('users')) || []

const saveToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users))
}

/*------------------------------------------------------- */
/*-------------------Funciones Auxiliares---------------- */
/*------------------------------------------------------- */

// Funcion para validar que el campo no este vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

// Funcion para validar que el largo del input este entre un minimo y un maximo de caracteres
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length < max;
};

// Funcion para validar email
const isEmailValid = (input) => {
  // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const regex = /^\w+([\.-]?\w+)*@gmail\.com$/;
  // Test
  return regex.test(input.value.trim());
};


// Funcion para verificar que el email no exista en el array de usuarios
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim())
}

// Funcion para validar la pw
const isPassSecure = (input) => {
  // const regex =
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/

  // test
  return regex.test(input.value.trim());
};


// Funcion para validar el telefono
const isPhoneValid = (input) => {
  const regex = /^[0-9]{10}$/
  // Testeamos
  return regex.test(input.value.trim())
}

/*------------------------------------------------------- */
/*-----------------Funciones Errores/Exito---------------- */
/*------------------------------------------------------- */

// Funcion para mostrar un error en el HTML al validar el input
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

// Funcion para mostrar exito input valido
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

// showError(input, 'El error es porque escribiste mal tu nombre')

/*------------------------------------------------------- */
/*-------------------Funciones de validacion------------- */
/*------------------------------------------------------- */

// Funcion para validar un input de tipo texto
const checkTextInput = (input) => {
  let valid = false;
  const minCharacters = 3;
  const maxCharacters = 25;

  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isBetween(input, minCharacters, maxCharacters)) {
    // alert('El campo tiene que tener x caracteres')
    showError(
      input,
      `Este cammpo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
    );
    return;
  }

  // Si ta todo ok pintamos el input de verde
  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar el email
const checkEmail = (input) => {
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "Este campo es obligatorio");
    return;
  }

  if (!isEmailValid(input)) {
    showError(input, "El email no es valido");
    return;
  }

  if(isExistingEmail(input)){
    showError(input, "El email ya se encuentra registrado")
    return
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar la contrasena
const checkPassword = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "La password es obligatoria");
    return;
  }

  if(!isPassSecure(input)){
    showError(input, 'La password debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo')
    return
  }

  showSuccess(input);
  valid = true;
  return valid;
};

// Funcion para validar el telefono
const checkPhone = (input) => {
  let valid = false

  if(isEmpty(input)){
    showError(input, "El telefono es obligatorio")
    return
  }

  if(!isPhoneValid(input)){
    showError(input, 'El telefono no es valido')
    return
  }

  showSuccess(input)
  valid = true
  return valid
}

const validateForm = (e) => {
  e.preventDefault()

  let isNameValid = checkTextInput(nameInput) //true o false
  let isLastNameValid = checkTextInput(lastNameInput)
  let isEmailValid = checkEmail(emailInput)
  let isPasswordValid = checkPassword(passInput)
  let isPhoneValid = checkPhone(phoneInput)

  let isValidForm = isNameValid && isLastNameValid && isEmailValid && isPasswordValid && isPhoneValid

  if(isValidForm){
    users.push({
      name: nameInput.value,
      lastname: lastNameInput.value,
      email: emailInput.value,
      password: passInput.value,
      phone: phoneInput.value
    })
    saveToLocalStorage(users)
    alert("Te registraste con exito :)")
    window.location.href = 'login.html'
  }
}

// Funcion init
const init = () => {
  registerForm.addEventListener('submit', validateForm)
  nameInput.addEventListener("input", () => checkTextInput(nameInput));
  lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
  phoneInput.addEventListener('input', () => checkPhone(phoneInput))
};

init();
