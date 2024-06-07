/*
  Nosotros queremos generar una lista de tareas.
  Ingresar datos en un input (tarea)
  Deberiamos capturar esos datos del input cuando se mande el form
  Renderizar(mostrar) lo que se mando (capturo) en el input
  -- Las tareas deberiamos guardarlas en un array.
  Podriamos evaluar si la tarea ya esta en el array, si esta que no se cargue
  Que la tarea no este vacia
  poder borrar tareas
  guardar en el LS => Guarda por mas que refresquemos la pagina
*/

// 1. Definimos las variables necesarias de los elementos del HTML
const taskInput = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const tasksContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector('.deleteAll-btn')

let taskList = JSON.parse(localStorage.getItem('tasks')) || []



// Funcion para guardar en el LS
const saveLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

const createTaskHTML = (task) => {
  return `
    <li>
        ${task.name}<img
          class="delete-btn"
          src="./img/delete.svg"
          alt="boton de borrar"
          data-id="${task.id}"
        />
    </li>
  `;
};

// Funcion que va a renderizar las tareas en el HTML
const renderTaskList = () => {
  tasksContainer.innerHTML = taskList
    .map((task) => createTaskHTML(task))
    .join("");
};


// Funcion para mostrar o no el boton de borrar todas las tareas
const toggleDeleteAllBtn = () => {
  if(taskList.length < 2){
    deleteAllBtn.classList.add('hidden')
    return
  }

  deleteAllBtn.classList.remove('hidden')
}

const isValidTask = (taskName) => {
  let isValid = true;

  if (!taskName.length) {
    alert("Ingresa una tarea");
    isValid = false;
  } else if (
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert("Ya existe una tarea con ese nombre");
    isValid = false;
  }

  return isValid;
};

const addTask = (e) => {
  e.preventDefault();
  const taskName = taskInput.value.trim().replace("/\s+/g", " ")

  if (isValidTask(taskName)) {
    taskList = [...taskList, { name: taskName, id: Date.now() }];
    addForm.reset();
    renderTaskList();
    saveLocalStorage()
    toggleDeleteAllBtn()
  }
};

// Funcion para borrar las tareas
const removeTask = (e) => {
  if(!e.target.classList.contains('delete-btn')) return

  const filterId = Number(e.target.dataset.id)
  taskList = taskList.filter(task => task.id !== filterId)
  renderTaskList()
  saveLocalStorage()
  toggleDeleteAllBtn()
}

// Eliminar todas las tareas
const removeAll = () => {
  taskList = []
  renderTaskList()
  saveLocalStorage()
  toggleDeleteAllBtn()
}

const init = () => {
  document.addEventListener('DOMContentLoaded', renderTaskList)
  addForm.addEventListener("submit", addTask);
  tasksContainer.addEventListener("click", removeTask)
  deleteAllBtn.addEventListener('click', removeAll)
  document.addEventListener('DOMContentLoaded', toggleDeleteAllBtn)
};

init();
