import 
{ fetchData, getCurrentUser, getCurrentReservation, setCurrentReservation, removeCurrentReservation } 
from './main.js'


const labelForm = document.getElementById("reservation-form")
//labelForm.style.visibility = "hidden";

const reservationForm = document.getElementById("reservation-form-1")


if(reservationForm) reservationForm.addEventListener('submit', reserve)
console.log(getCurrentUser().user_id);

function reserve(e) {
    e.preventDefault();
    
    fetchData('/reservations/postReservation', {userId: getCurrentUser().user_id}, "POST")
    .then((data) => {
    data = {userId: getCurrentUser().user_id}
    //setCurrentReservation(data);
    window.location.href = "labels.html";
  })
.catch((error) => {
  const errorText = error.message;
  console.log(`Error! ${errorText}`);

});

//reservationForm.style.visibility = "hidden";
//labelForm.style.visibility = "visible";

};
