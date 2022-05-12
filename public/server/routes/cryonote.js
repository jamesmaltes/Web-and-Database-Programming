const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/create', async (req, res) => {
    try {
      const note = await Note.register(req.body);
      console.log(note)
      res.send({...note, password: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Note.deleteNote(req.body.noteId);
      res.send({success: "Note deleted"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .put('/edit', async (req, res) => {
    try {
      const note = await Note.editNote(req.body);
      console.log(note)
      res.send({...note, password: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })
  
module.exports = router;