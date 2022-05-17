const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_age NUMERIC,
    user_email VARCHAR(255),
    user_password VARCHAR(255),
    CONSTRAINT user_pk PRIMARY KEY(user_id)
  )`;
  await con.query(sql);
}
createTable();

let getUsers = async () => {
  const sql = `SELECT * FROM users`;
  return await con.query(sql);
};

async function getUser(user) {
  let sql;
  if(user.userId) {
    sql = `SELECT * FROM users
      WHERE user_id = ${user.userId}
    `;
  } else {
    sql = `SELECT * FROM users
      WHERE user_email = "${user.userEmail}"
    `;
  }

  return await con.query(sql);
}

async function login(userEmail, password) {
  const user = await userExists(userEmail);
  if(!user[0]) throw Error('User email not found')
  if(user[0].user_password !== password) throw Error("Password is incorrect");

  return user[0];
}

async function register(user) {
  const u = userExists(user.userEmail);
  if(u.length>0) throw Error("Email already in use");

  const sql = `INSERT INTO users (user_email, user_password, user_age)
    VALUES ("${user.userEmail}", "${user.password}", ${user.age})
  `;

  const insert = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}

async function deleteUser(userId) {
  const sql = `FOREIGN_KEY_CHECKS=0;
  DELETE FROM users 
    WHERE user_id = ${userId}
  `;
  await con.query(sql);
 
}

async function userExists(userEmail) {
  const sql = `SELECT * FROM users
    WHERE user_email = "${userEmail}"
  `;
  return await con.query(sql);
}

async function editUser(user) {
  const sql = `UPDATE users SET
    user_email = "${user.userEmail}"
    WHERE user_id = ${user.userId}
  `;
  const update = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}


module.exports = { getUsers, login, register, deleteUser, editUser, getUser, createTable };