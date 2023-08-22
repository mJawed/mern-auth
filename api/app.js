const express = require('express');
//const errorMiddleware = require('./middleware/error')

const app = express();

app.use(express.json())

//Routes import

//const product = require('./routes/productRouter');
const userRouters = require('./routes/user.Router.js');




//app.use('/api/v1',product) 
//app.use('/api/v1',userRouters) 

app.use('/api/user', userRouters);


//Middleware 

///app.use(errorMiddleware);


app.get('/',(req,res)=>{
    res.json({
        message:'welcome to the api yo yo'
    })
})

module.exports = app  