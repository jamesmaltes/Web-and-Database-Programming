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

-allow users to add a label to their cryochamber
(similar to a gravestone message)

This will turn the website into a labeltaking website rather than 
a purely e-commerce website

*/

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
if(getCurrentUser() && getCurrentReservation()) {
  nav.innerHTML = `
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a id="logout">Logout</a></li>
    <li><a href="reservation.html">View Reservations</a></li>
  </ul>
  `;

  // changes reservation form to have buttons to add a label and delete a reservation
  reservationForm.innerHTML = `
  <div>
    <p class="error"></p>
    <button class="btn" id="add-label">Add a Label to your Cryochamber</button>
    <button class="btn" id="delete-res">Delete your Reservation</button>
  </div>
  `;
}

// http://localhost:3000
// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

// exporting user methods including logout
export function setCurrentUser(user) {
  localStorage.setItem('users', JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem('users')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}

// exporting label methods
export function setCurrentLabel(labels) {
  localStorage.setItem('label', JSON.stringify(labels));
}

export function getCurrentLabel() {
  return JSON.parse(localStorage.getItem('labels'));
}

export function getAllLabels(reservation_id) {
  return true;
}

// exporting reservation functions
export function setCurrentReservation(reservation_id) {
  localStorage.setItem('reservation',JSON.stringify(reservation))
}

export function getCurrentReservation() {
  return JSON.parse(localStorage.getItem('reservation'));
}

export function removeCurrentReservation() {
  localStorage.removeItem('reservation')
}
