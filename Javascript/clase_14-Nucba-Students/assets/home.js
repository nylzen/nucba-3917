const userName = document.getElementById("user-name");
const logoutBtn = document.getElementById("logout-message");

// Nos traemos del SS el usuario
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
console.log(activeUser)

const showUserName = () => {
  userName.textContent = `${activeUser.name} ${activeUser.lastname}`;
};

const logout = () => {
  if (window.confirm("Estas seguro que queres cerrar sesion?")) {
    sessionStorage.removeItem("activeUser");
    window.location.href = "../index.html";
  }
};

const init = () => {
  showUserName();
  logoutBtn.addEventListener("click", logout);
};

init();
