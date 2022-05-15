import 
{ fetchData, getCurrentReservation, setCurrentReservation, removeCurrentReservation } 
from './main.js'

const reservationForm = document.getElementById("reservation-form")
if(reservationForm) reservationForm.addEventListener('submit', reserve);

function reserve(e) {
    e.preventDefault();
    
    fetchData('reservation')
}