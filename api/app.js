const express = require('express');
//const errorMiddleware = require('./middleware/catchAsyncErrors.js')

const app = express();

app.use(express.json())

//Routes import

//const product = require('./routes/productRouter');
const userRouters = require('./routes/user.Router.js');
const authRouter = require('./routes/auth.Router.js'); 
const authSingInRouter = require('./routes/signin.Router.js')





//app.use('/api/v1',product) 
//app.use('/api/v1',userRouters) 

app.use('/api/user', userRouters);
app.use('/api/auth/signup', authRouter);
app.use('/api/auth/signin', authSingInRouter);



//Middleware 

// Middleware to handle errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });

});
  


app.get('/',(req,res)=>{
    res.json({
        message:'welcome to the api yo yo'
    })
})

module.exports = app  