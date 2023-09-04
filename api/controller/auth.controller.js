const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const User = require("../models/user.model.js");

const saltRounds = 10; 

const signUp = async (req, res, next) => {
  try {
    const { userName, userEmail, userPassword, userTerms } = req.body;
    const passwordHash = await bcrypt.hash(userPassword, saltRounds); 

  
    const newUser = new User({
      username: userName,
      email: userEmail,
      password: passwordHash,
      terms: userTerms
    });

    await newUser.save(); 

    res.status(201).json({ message: "User created successfully" });
  
  } catch (error) {
    //console.error("Error during sign-up:", error);
    console.log(error.name)
    // Send a meaningful error response
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ errors: errorMessages });
    } else {
      res.status(500).json({ message: "An error occurred during sign-up" });
    }
  }
};

module.exports = signUp;



