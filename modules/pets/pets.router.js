const express = require('express');
const router = express.Router();

const Pets = require('./pets.service');
const People = require('../people/people.service');

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
});

module.exports = router;
