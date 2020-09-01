'use strict';

const express = require('express');
const router = express.Router();
const requests = require('./data');

router.route('/edit')

  .get((req, res) => {
    res.status(200).json(requests);
  })

  .post((req, res) => {
    console.log(req.body);
    res.status(200).send("Success");
  })

  module.exports = router;