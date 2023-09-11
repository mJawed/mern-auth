const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');

const signIn = async (req, res, next) => {
  const { username, userPassword } = req.body;

  try {
    const validUser = await User.findOne({ username: username });

    if (validUser) {
      const validPassword = bcrypt.compareSync(userPassword, validUser.password);

      if (validPassword) {
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(validUser);
      } else {
        res.status(403).json({ message: 'Wrong password' });
      }
    } else {
      res.status(403).json({ message: 'Wrong username' });
    }
  } catch (error) {
    console.error(error); // Handle errors properly, e.g., log them
    res.status(500).json({ message: 'Server error' }); // Respond with an error message
  }
};

module.exports = signIn;
