// src/routes/flights.js
const express = require('express');
const router = express.Router();
const { getFlights } = require('../controllers/flights');

router.post('/search', getFlights);

module.exports = router;
