const con = require("./db_connect");

async function createLabel() {
  let sql = `CREATE TABLE IF NOT EXISTS labels (
    label_id INT NOT NULL AUTO_INCREMENT,
    label_content VARCHAR(255),
    reservation_id INT,
    CONSTRAINT label_pk PRIMARY KEY(label_id),
    CONSTRAINT reservation_fk FOREIGN KEY(reservation_id) REFERENCES reservations(reservation_id)
)`;
  await con.query(sql);
}
createLabel();

let getLabels = async () => {
  const sql = `SELECT * FROM labels`;
  return await con.query(sql);
};

async function getLabel(label) {
  let sql;
  if(label.labelId) {
    sql = `SELECT * FROM labels
      WHERE label_id = ${label.labelId}
    `;
  } else {
    sql = `SELECT * FROM labels
      WHERE label_content = "${label.labelContent}"
    `;
  }

  return await con.query(sql);
}

async function postLabel(label) {
  const sql = `INSERT INTO labels (label_id, label_content)
    VALUES ("${label.labelId}","${label.labelContent}")
  `;

  const insert = await con.query(sql);
  const newLabel = await getLabel(label);
  return newLabel[0];
}

async function deleteLabel(labelId) {
  const sql = `DELETE FROM labels 
    WHERE label_id = ${labelId}
  `;
  await con.query(sql);
 
}

async function labelExists(labelContent) {
  const sql = `SELECT * FROM labels
    WHERE label_content = "${labelContent}"
  `;
  return await con.query(sql);
}

async function editLabel(label) {
  const sql = `UPDATE labels SET
    label_content = "${label.labelContent}"
    WHERE label_id = ${label.labelId}
  `;
  const update = await con.query(sql);
  const newLabel = await getLabel(label);
  return newLabel[0];
}

async function getAllLabels() {
  let sql;
  sql = 'SELECT label_content, label_id FROM labels'
  return await con.query(sql);
}

module.exports = { getLabels, postLabel, deleteLabel, labelExists, editLabel, getLabel, getAllLabels, createLabel };