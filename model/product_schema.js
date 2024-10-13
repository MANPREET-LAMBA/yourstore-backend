const mongoose = require("mongoose");


const product_schema = new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true
        },
        productname:{
            type: String,
            required: true,
            maxLength: 50
        },
        dircription: {
            type: String,
            required: true,
            maxLength: 550
        },
        price: {
            type: Number,
            required: true
          
        },
        category:{
            type: String,
            required : true
        
        },
        image:{
            type : String,
            required: true
        }
    }
) 

module.exports = mongoose.model("product",product_schema);