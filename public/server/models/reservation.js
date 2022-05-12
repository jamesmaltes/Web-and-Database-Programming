const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS reservations (
    reservation_id INT NOT NULL AUTO_INCREMENT,
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

async function reservationExists(reservationId) {
  const sql = `SELECT * FROM reservations
    WHERE reservation_id = "${reservationId}"
  `;
  return await con.query(sql);
}


module.exports = { getreservations, register, deleteReservation, getreservation, createTable };