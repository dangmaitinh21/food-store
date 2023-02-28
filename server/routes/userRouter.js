const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

const User = require('../models/userModel');

router.post('/create-user', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    uid: req.body.uid,
  });

  user.save((err, user) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ data: user });
    }
  });
});

// router.post('/user-authentication', (req, res) => {
//   const user = {
//     name: req.body.name,
//     password: req.body.password
//   }
// });

module.exports = router;
