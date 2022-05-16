const con = require("./db_connect");

async function createReservation() {
  let sql = `CREATE TABLE IF NOT EXISTS reservations (
    reservation_id INT NOT NULL AUTO_INCREMENT,
    reservation VARCHAR(255),
    user_id INT, 
    CONSTRAINT reservation_pk PRIMARY KEY(reservation_id),
    CONSTRAINT user_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
  )`;
  await con.query(sql);
}
createReservation();

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
    else {
      sql = `SELECT * FROM reservations
        WHERE user_id = ${reservation.userId}
      `;
    }

  return await con.query(sql);
}

async function deleteReservation(reservation) {
  const sql = `DELETE FROM reservations 
    WHERE reservation_id = ${reservation.reservationId}
  `;
  await con.query(sql);
 
}

async function postReservation(reservation) {
  const sql = `INSERT INTO reservations (user_id)
    VALUES (${reservation.userId})
  `;
  const insert = await con.query(sql);
  const newRes = await getReservation(reservation);
  return newRes[0];
}

async function reservationExists(reservation) {
  const sql = `SELECT * FROM reservations
    WHERE reservation_id = "${reservation.reservationId}"
  `;
  return await con.query(sql);
}

async function getAllReservations() {
  let sql;
  sql = 'SELECT reservation_id FROM reservations'
  return await con.query(sql);
}

module.exports = { getAllReservations, getReservations, postReservation, deleteReservation, getReservation, createReservation, reservationExists };