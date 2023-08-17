const express = require('express');
const mongoose = require("mongoose");


const connectDataBase = ()=>{
    mongoose.connect(process.env.DB_URL,{
        // mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`,{
         
     }).then((data)=>{
         console.log(`Datababe connected to db ${data.connection.host}`)
     }).catch((err)=>{
         console.log(err)
     })
}

module.exports = connectDataBase
