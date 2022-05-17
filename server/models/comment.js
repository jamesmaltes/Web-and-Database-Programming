const con = require("./db_connect");

async function createComment() {
  let sql = `CREATE TABLE IF NOT EXISTS comments (
    comment_id INT NOT NULL AUTO_INCREMENT,
    comment_content VARCHAR(255),
    user_id INT,
    CONSTRAINT comment_pk PRIMARY KEY(comment_id),
    CONSTRAINT user3_fk FOREIGN KEY(user_id) REFERENCES users(user_id)
)`;
  await con.query(sql);
}
createComment();

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

async function postComment(comment) {
  const sql = `INSERT INTO comments (comment_content, user_id)
    VALUES ("${comment.commentContent}", ${comment.userId})
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
  sql = 'SELECT comment_content, comment_id, user_id FROM comments'
  return await con.query(sql);
}

module.exports = { getComments, postComment, deleteComment, commentExists, editComment, getComment, getAllComments, createComment };