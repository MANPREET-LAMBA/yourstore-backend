const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser())
const envdot = require("dotenv");
envdot.config();

var cors = require('cors')

//midle
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

const port=3000

  


app.listen( 3000,()=>{console.log("port 4000")});

//db connection 
const dbconnection = require("./connection/database")
dbconnection();

//cloudnary connection
const condinary_connection = require("./connection/cloudnary");
condinary_connection()


app.get("/",(req,res)=>{
    res.send("hello---")
   
});





const storepath = require("./route/routes")
app.use("/api",storepath)




