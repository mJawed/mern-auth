const app = require('./app')

const dotenv = require('dotenv');
const connectDataBase = require('./config/database')


//config

dotenv.config({path:"api/config/config.env"}) 


//connecting database

connectDataBase(); 


app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})