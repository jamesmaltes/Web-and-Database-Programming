const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS notes (
    note_id INT NOT NULL AUTO_INCREMENT,
    notecontent VARCHAR(255) NOT NULL UNIQUE,

  )`;
  await con.query(sql);
}
createTable();

let getNotes = async () => {
  const sql = `SELECT * FROM notes`;
  return await con.query(sql);
};

async function getNote(note) {
  let sql;
  if(note.noteId) {
    sql = `SELECT * FROM notes
      WHERE note_id = ${note.noteId}
    `;
  } else {
    sql = `SELECT * FROM notes
      WHERE notecontent = "${note.noteContent}"
    `;
  }

  return await con.query(sql);
}

async function createNote(note) {
  const sql = `INSERT INTO notes (notecontent)
    VALUES ("${note.noteContent}")
  `;

  const insert = await con.query(sql);
  const newNote = await getNote(note);
  return newNote[0];
}

async function deleteNote(noteId) {
  const sql = `DELETE FROM notes 
    WHERE note_id = ${noteId}
  `;
  await con.query(sql);
 
}

async function noteExists(notecontent) {
  const sql = `SELECT * FROM notes
    WHERE notecontent = "${notecontent}"
  `;
  return await con.query(sql);
}

async function editNote(note) {
  const sql = `UPDATE notes SET
    notecontent = "${note.noteContent}"
    WHERE note_id = ${note.noteId}
  `;
  const update = await con.query(sql);
  const newNote = await getNote(note);
  return newNote[0];
}


module.exports = { getNotes, createNote, deleteNote, editNote, getNote, createTable };