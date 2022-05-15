const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS comments (
    comment_id INT NOT NULL AUTO_INCREMENT,
    comment_content VARCHAR(255) NOT NULL UNIQUE,
    CONSTRAINT comment_pk PRIMARY KEY(comment_id)
    CONSTRAINT reservation_fk FOREIGN KEY(reservation_id) REFERENCES reservation(reservation_id)
  )`;
  await con.query(sql);
}
createTable();

let getComments = async () => {
  const sql = `SELECT * FROM comments`;
  return await con.query(sql);
};

async function getComment(comment) {
  let sql;
  if(comment.commentId) {
    sql = `SELECT * FROM comments
      WHERE comment_id = ${comment.commentId}
    `;
  } else {
    sql = `SELECT * FROM comments
      WHERE comment_content = "${comment.commentContent}"
    `;
  }

  return await con.query(sql);
}

async function createComment(comment) {
  const sql = `INSERT INTO comments (comment_id, comment_content)
    VALUES ("${comment.commentId}","${comment.commentContent}")
  `;

  const insert = await con.query(sql);
  const newComment = await getComment(comment);
  return newComment[0];
}

async function deleteComment(commentId) {
  const sql = `DELETE FROM comments 
    WHERE comment_id = ${commentId}
  `;
  await con.query(sql);
 
}

async function commentExists(commentContent) {
  const sql = `SELECT * FROM comments
    WHERE comment_content = "${commentContent}"
  `;
  return await con.query(sql);
}

async function editComment(comment) {
  const sql = `UPDATE comments SET
    comment_content = "${comment.commentContent}"
    WHERE comment_id = ${comment.commentId}
  `;
  const update = await con.query(sql);
  const newComment = await getComment(comment);
  return newComment[0];
}

async function getAllComments() {
  let sql;
  sql = 'SELECT comment, reservation, reservation_id FROM comments'
}

module.exports = { getComments, createComment, deleteComment, commentExists, editComment, getComment, getAllComments, createTable };