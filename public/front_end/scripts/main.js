/*
Future ideas for website:

-When a user clicks on Reserve a Slot,
they will be taken to the reservation page
and be able to submit a reservation request.

-if they are not logged in already, they will be taken 
to the login page.

-they must be signed in before they can reserve a spot.

-check if registration / login information is valid
-checking to see if a user with their information already exists
-display error messages (user already exists, not logged in etc.)
-increment id numbers for new users upon registration
-increment reservation id numbers for reservation requests

-allow users to add a note to their cryochamber
(similar to a gravestone message)

This will turn the website into a notetaking website rather than 
a purely e-commerce website

*/

import { getreservation } from "../../server/models/reservation";

// if a user exists and is logged in, add the profile page and logout button to the nav
// if user not logged in, remove the reservation page and add login button
const nav = document.querySelector('nav');
if(getCurrentUser()) {
  nav.innerHTML = `
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a id="logout">Logout</a></li>
    <li><a href="reservation.html">Reserve a Spot</a></li>
  </ul>
  `;
} else {
  nav.innerHTML = `
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="login.html">Login</a></li>
    <li><a href="register.html">Register</a></li>
  </ul>
  `
}

// if a user has a submitted reservation, allow them to view the reservation from nav bar
const reservationForm = document.getElementById('reservation-form');
if(getreservation()) {
  nav.innerHTML = `
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a id="logout">Logout</a></li>
    <li><a href="reservation.html">View Reservation</a></li>
  </ul>
  `;

  // changes reservation form to have buttons to add a note and delete a reservation
  reservationForm.innerHTML = `
  <div>
    <p class="error"></p>
    <button class="btn" id="add-note">Add a Note to your Cryochamber</button>
    <button class="btn" id="delete-res">Delete your Reservation</button>
  </div>
  `;
}


//User class w/ get and set methods
class User {
    constructor(id, firstName, lastName, age, email, pswd) {
      this.userId = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userAge = age;
      this.userEmail = email;
      this.userPassword = pswd;
    }

    //get methods


    
    getUserId() {
      return this.userId;
    }
    getFirstName() {
      return this.firstName;
    }
    getLastName() {
        return this.lastName;
      }
    getUserAge() {
        return this.userAge;
      }
    getUserPassword() {
        return this.userPassword;
    }
      
    //set methods
    setUserId(id) {
      this.userId = id;
    }
    setFirstName(firstName) {
      this.firstName = firstName;
    }
    setLastName(lastName) {
      this.lastName = lastName;
      }
    setUserAge(age) {
      this.userAge = userAge;
      }
    setUserAge(email) {
      this.userEmail = email;
      }
    setUserAge(userPassword) {
      this.userPassword = pswd;
      }
}

//create a new User object using your User class/constructor 
let regForm = document.getElementById("register-form"); 
regForm.addEventListener('submit', createUser);

function createUser(e) {
  e.preventDefault();

  //placeholder ID for now since users cannot create their own ID #
  let id = 12345;

  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let pswd = document.getElementById("pswd").value;

  const newUser = new User(id, firstName, lastName, age, email, pswd);
  console.log(newUser);
}


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Logged in user class w/ get and set methods
class loggedInUser {
  constructor(email, pswd) {
    this.loggedInEmail = email;
    this.loggedInPassword = pswd;
  }

  //get methods
  getLoggedInEmail() {
    return this.loggedInEmail;
  }
  getLoggedInPassword() {
    return this.loggedInPassword;
  }

  //set methods
  setLoggedInEmail(email) {
    this.loggedInEmail = email;
  }

  setLoggedInPassword(pswd) {
    this.loggedInPassword = pswd;
  }
}

//login form
let loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', addLogin);


//creates a new logged in user when login form is submitted
//(have to check if user already exists later)

function addLogin(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let pswd = document.getElementById("pswd");
  const newLoggedInUser = new loggedInUser(email, pswd);
  console.log(newLoggedInUser);
}

// Get Users function based on if user is logged in
function getUsers() {
  fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    let ul = document.getElementById("allUsers");
    data.forEach((user) => {
      let li = document.createElement('li');
      let text = document.createTextNode(user.userName);
      li.appendChild(text);
      ul.appendChild(li);
    })
    console.log(data);
  })
  .catch((err) => console.log(`Error! ${err}`));
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Reservation class w/ get and set methods
class Reservation {
  constructor(id, date) {
    this.reservationId = id;
    this.reservationDate = date;
  }

  //get methods
  getReservationId() {
    return this.reservationId;
  } 
  getReservationDate() {
    return this.reservationDate;
  }
  
  //set methods
  setReservationId(id) {
    this.reservationId = id;
  }

  setReservationDate(date) {
    this.reservationDate = date;
  }
}


//creates reservation when button is clicked
reservationForm.addEventListener('click', addReservation);
let reservationCount = 0; //default count of 0 for # of res

function addReservation(e) {
  e.preventDefault();

  //All values as placeholders for now b/c info needed from database / other source
  let id = 12345;
  let date = 4/18/2022; 
  const newRes = new Reservation()
  console.log(newRes);
  reservationCount++;
}