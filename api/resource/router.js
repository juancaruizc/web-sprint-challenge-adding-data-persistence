const express = require('express');
const router = express.Router();

const Task = require('./model');

router.post('/', (req, res) => {
  const resource = req.body;
  Task.insertResource(resource)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/', (req, res) => {
  Task.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});
module.exports = router;
