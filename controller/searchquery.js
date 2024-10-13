const { response } = require("express");
const product = require("../model/product_schema");

async function searchquery(req, res) {
    const query = req.query.category;
    // console.log(req.query);
    console.log(query);


    const response = await product.find()

 

    // console.log(response)

    // response.map(e=>{
    //     console.log("map")
    // })
   const productlist = response.map(product=>{
   if(product.category == query){
    return product;
   }

    })

    
 res.send(productlist)
  


}

module.exports = searchquery;