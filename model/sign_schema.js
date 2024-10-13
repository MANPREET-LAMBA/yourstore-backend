const mongoose = require("mongoose");

const signschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength: 90
        },
        username : {
            type:String,
            required : true,
            maxLength: 30,
            unique: true
        },
        mobile_no: {
            type: Number,
            required : true,
            maxLength: 10
        },
        email: {
            type: String,
            required : true,
            maxLength: 50
        },
        hashpass: {
            type: String,
            required : true
        }
    })

module.exports =  mongoose.model("users",signschema);