import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pswd = document.getElementById("pswd").value;

  fetchData('/users/login', {userEmail: email, password: pswd}, "POST")
  .then((data) => { //cathy@gmail.com, 12345
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "reservation.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}

const regForm = document.getElementById("register-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  const uage = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const pswd = document.getElementById("pswd").value;


  fetchData('/users/register', { age: uage, userEmail: email, password: pswd}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "reservation.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#reg-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}