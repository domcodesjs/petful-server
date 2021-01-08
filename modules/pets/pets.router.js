const express = require('express');
const router = express.Router();

const Pets = require('./pets.service');
const People = require('../people/people.service');

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const { dog, cat } = Pets.get();
  return res.status(200).json({
    success: true,
    dog,
    cat
  });
});

router.delete('/:type', (req, res) => {
  // Remove a pet from adoption.
  const { type } = req.params;

  Pets.dequeue(type);
  People.dequeue();

  res.status(200).json({
    success: true
  });
});

module.exports = router;
