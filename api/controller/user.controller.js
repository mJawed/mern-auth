const express= require('express')


const test = (req, res) => {
    res.json({
      message: 'test api',
    });
  };


module.exports = test