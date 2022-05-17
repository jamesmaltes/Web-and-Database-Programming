const express = require('express');
const Comment = require('../models/comment');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const comments = await Comment.getComments();
      res.send(comments);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .get('/getAllComments', async (req, res) => {
    try {
      const comments = await Comment.getAllComments();
      res.send(comments);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/postComment', async (req, res) => {
    try {
      const comment = await Comment.postComment(req.body);
      console.log(comment)
      res.send({...comment, commentContent: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/deleteComment', async (req, res) => {
    try {
      await Comment.deleteComment(req.body.commentId);
      res.send({success: "Comment deleted"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .put('/editComment', async (req, res) => {
    try {
      const comment = await Comment.editComment(req.body);
      console.log(comment)
      res.send({...comment, commentContent: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })
  
module.exports = router;