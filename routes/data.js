const express = require('express');
const router = express.Router();
const Newdata = require('../models/data');

// CREATE

router.post('/post', (req, res, next) => {
  const { premio, ip, cordsLat, cordsLon } = req.body;
  
  Newdata.create({
    premio,
    ip,
    cordsLat,
    cordsLon,
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
  Newdata.find()
    .then(card => {
      res.status(200)
      res.json(card)
    })
    .catch(next)
})

module.exports = router;