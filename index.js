const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser())
const envdot = require("dotenv");
envdot.config();

var cors = require('cors')

//midle
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())



  

console.log("bsbhjdsbhcjhdbjdbjhvhjbSNH")
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



const model2 = require("../store-d/model/product_schema")

app.get("/data_update2",async(req,res)=>{
    const query = req.body;
console.log(query)

   try {
  
     const update= await model2.updateMany({id:query.id}, {
         $set: 
           {
             productname: query.productname,
             dircription: query.dircription,
             price: query.price,
             Catageory:query.Catageory
           
           }
       },{new: true})

   } catch (error) {
    console.error(error)
   }
});





const storepath = require("./route/routes")
app.use("/api",storepath)

console.log( new Date());


