const express = require('express');
const People = require('./people.service');
const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get();

  res.status(200).json({
    success: true,
    people
  });
});

router.post('/', (req, res) => {
  // Add a new person to the queue.
  const { name } = req.body;

  People.enqueue(name);

  res.status(200).json({
    success: true,
    name
  });
});

module.exports = router;
