const express = require('express');
const Reservation = require('../models/reservation');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const reservations = await Reservation.getReservations();
      res.send(reservations);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/postReservation', async (req, res) => {
    try {
      const reservation = await Reservation.postReservation(req.body);
      console.log(reservation)
      res.send({...reservation, userId: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Reservation.deleteReservation(req.body.reservationId);
      res.send({success: "Reservation deleted."});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .get('/getAllReservations', async (req, res) => {
    try {
      const reservations = await Reservation.getAllReservations();
      res.send(reservations);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
module.exports = router;