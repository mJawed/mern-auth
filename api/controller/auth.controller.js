const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const User = require("../models/user.model.js");

const saltRounds = 10; 

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, saltRounds); 

    console.log(req.body);

    const newUser = new User({
      username,
      email,
      password:passwordHash,
    });

    await newUser.save(); 

    res.status(201).json({ message: "true" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ message: {error} });
  }
};

module.exports = signUp;
