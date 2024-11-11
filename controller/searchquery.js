
const product = require("../model/product_schema");

async function searchquery(req, res) {
  


    const response = await product.find()

   const productlist = response.map(product=>{
   if(product.category == req.query.category){
    return product;
   }
   if(product.id == req.query.id){
    return product;
   }

    })

    
 res.send(productlist)
  


}

module.exports = searchquery;