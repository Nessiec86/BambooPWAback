const express = require('express');
const router = express.Router();
const Card = require('../models/data');


router.post('/canvas', (req, res, next) => {
  const { premio } = req.body;
  
  console.log(premio)
  Data.create({
    premio,
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;