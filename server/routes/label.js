const express = require('express');
const Label = require('../models/label');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const labels = await Label.getLabels();
      res.send(labels);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .get('/getAllLabels', async (req, res) => {
    try {
      const labels = await Label.getAllLabels();
      res.send(labels);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/postLabel', async (req, res) => {
    try {
      const label = await Label.postLabel(req.body);
      console.log(label)
      res.send({...label, labelContent: undefined})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/deleteLabel', async (req, res) => {
    try {
      await Label.deleteLabel(req.body.labelId);
      res.send({success: "Label deleted"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .put('/editLabel', async (req, res) => {
    try {
      const label = await Label.editLabel(req.body);
      console.log(label)
      res.send({...label, labelContent: undefined});
    } catch(error) {
      res.status(401).send({message: error.message})
    }
  })
  
module.exports = router;