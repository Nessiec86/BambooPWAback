const express = require('express');
const router = express.Router();
const Data = require('../models/data');

// CREATE

router.post('/post', (req, res, next) => {
  const { premio, ip } = req.body;
  
  Data.create({
    premio,
    ip,
  })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((error) => {
    next(error);
  });
});


// READ ALL

router.get('/list', (req, res, next) => {
  Data.find()
    .then(card => {
      res.status(200)
      res.json(card)
    })
    .catch(next)
})

module.exports = router;