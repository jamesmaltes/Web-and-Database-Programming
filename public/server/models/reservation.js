const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS reservations (
    reservation_id INT NOT NULL AUTO_INCREMENT,
    CONSTRAINT reservation_pk PRIMARY KEY(reservation_id)
    CONSTRAINT user_fk FOREIGN KEY(username) REFERENCES users(username)
  )`;
  await con.query(sql);
}
createTable();

let getReservations = async () => {
  const sql = `SELECT * FROM reservations`;
  return await con.query(sql);
};

async function getReservation(reservation) {
  let sql;
  if(reservation.reservationId) {
    sql = `SELECT * FROM reservations
      WHERE reservation_id = ${reservation.reservationId}
    `;
  } 

  return await con.query(sql);
}

async function deleteReservation(reservationId) {
  const sql = `DELETE FROM reservations 
    WHERE reservation_id = ${reservationId}
  `;
  await con.query(sql);
 
}

async function createReservation(reservationId) {
  const sql = `INSERT INTO reservations (reservation_id)
    VALUES ("${reservation.reservationId}")
  `
}

async function reservationExists(reservationId) {
  const sql = `SELECT * FROM reservations
    WHERE reservation_id = "${reservationId}"
  `;
  return await con.query(sql);
}


module.exports = { getReservations, createReservation, deleteReservation, getReservation, createTable };