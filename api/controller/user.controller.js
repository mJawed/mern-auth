const express= require('express')


const test = (req, res) => {
    res.json({
      message: 'API is working! from cotrollet',
    });
  };


module.exports = test