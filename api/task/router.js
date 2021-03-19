const express = require('express');
const router = express.Router();

const Task = require('./model');

router.post('/', (req, res) => {
  const task = req.body;
  Task.insertTask(task)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/', (req, res) => {
  Task.getTask()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
