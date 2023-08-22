const app = require('./app')
const userRouter = require('../api/routes/user.Router.js')
const dotenv = require('dotenv');
const connectDataBase = require('./config/database')

console.log(userRouter);
//config

dotenv.config({path:"api/config/config.env"})


//connecting database

connectDataBase(); 


app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})




   
