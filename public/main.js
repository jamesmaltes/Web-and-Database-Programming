/*
Future ideas for website:

-When a user clicks on Reserve a Slot,
they will be taken to the reservation page
and be able to submit a reservation request.

-if their user doesn't exist, they will be taken 
to the registration page where they can sign up.

-they must be signed in before they can reserve a spot.

-check if registration / login information is valid
-checking to see if a user already exists
*/

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

// registrationArray = Array.from(document.querySelectorAll('#registration-form input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});

/* 
When a user submits a form,
create a new User object using your User class/constructor 
*/
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


//Logged in user class w/ get and set methods
class loggedInUser {
  constructor(email) {
    this.loggedInEmail = email;
  }

  getLoggedInEmail() {
    return this.loggedInEmail;
  }

  setLoggedInEmail(email) {
    this.loggedInEmail = email;
  }
}

//login form
let loginForm = document.addEventListener("login-form");
loginForm.addEventListener('submit', addLogin);

/*
creates a new logged in user when login form is submitted
(have to check if user already exists later)
*/
function addLogin(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  const newLoggedInUser = new loggedInUser(email);
}

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


//Reservation request
let reservationForm = document.getElementById("reservation-form");
reservationForm.addEventListener('submit', addReservation);
let reservationCount = 0; //default count of 0 for # of res

function addReservation(e) {
  e.preventDefault();

  //All values as placeholders for now b/c info needed from database / other source
  let id = 12345;
  let date = 4/18/2022; 
  const newRes = new Reservation()
  reservationCount++;
}

/*
*****WIP / TEST STUFF*****

//to display current existing members - test based off followers example

let memberSection = document.getElementById("members");

document.getElementById("btn-members").addEventListener('click', getMembers);

function getMembers(e) {
  memberSection.innerText = "";
  fetch('members.json') 
  .then((res) => res.json())
  .then((data) => {
    memberSection.classList.toggle('hide')
    data.forEach((member) => {
      let user = document.createElement('div');
      user.className = "member";
      user.appendChild(document.createTextNode(member.firstName))
      memberSection.appendChild(user);
    });
  })
  .catch((err) => console.log(err));
}

*/