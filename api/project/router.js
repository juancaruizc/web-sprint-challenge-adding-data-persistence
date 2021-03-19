const express = require('express');
const router = express.Router();

const Project = require('./model');

router.post('/', (req, res) => {
  const project = req.body;
  Project.insertProject(project)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/', (req, res) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
