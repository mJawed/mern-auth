const express = require('express');
//const errorMiddleware = require('./middleware/error')

const app = express();

app.use(express.json())

//Routes import

//const product = require('./routes/productRouter');
//const userRouters = require('./routes/userRouter');




//app.use('/api/v1',product) 
//app.use('/api/v1',userRouters) 


//Middleware 

//app.use(errorMiddleware);


module.exports = app