const express = require("express");
const router = express.Router();
const brypt = require('bcryptjs')
const User = require("../models/user.model.js");

const saltRound = 10;

const signUp = async(req, res) => {

  
   const {username,email,password} = req.body
   let passwordHase = await brypt.hashSync(password,saltRound)

   console.log(email)

const newUser = await new User({
  username,email,passwordHase
})

newUser.save();

res.status(201).json({message:"trye"});

  };


module.exports = signUp