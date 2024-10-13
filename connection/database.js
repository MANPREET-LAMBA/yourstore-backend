const mongoose= require("mongoose");
require("dotenv").config();
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/shop5")
    .then(console.log("connection establish"))
    .catch((e)=>{
        console.error(e);
    });
}

module.exports = connect;