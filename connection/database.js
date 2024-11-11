const mongoose= require("mongoose");
require("dotenv").config();
const connect = async()=>{
    const uri = `mongodb://localhost:27017/yourstore`
    await mongoose.connect(uri)
    .then(()=>{console.log("connection establish")})
    .catch((e)=>{
        console.log(e);
    });
}

module.exports = connect; 