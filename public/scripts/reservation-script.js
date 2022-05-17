import 
{ fetchData, getCurrentUser, getCurrentReservation, removeCurrentReservation } 
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

function deleteReservation() {
    if(confirm('Are you sure you want to delete your reservation?')) {
      fetchData('/reservation/delete', {reservationId: getCurrentReservation().reservation_id}, "DELETE")
      .then((data) => {
        if(!data.message) {
          console.log(data.success)
          logout();
          window.location.href = "reservation.html"
        }
      })
      .catch((error) => {
        const errText = error.message;
        document.querySelector("#profile div p.error").innerHTML = errText;
        console.log(`Error! ${errText}`)
      })
    }
  }
