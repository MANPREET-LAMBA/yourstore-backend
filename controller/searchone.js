
const product = require("../model/product_schema");

async function searchone(req, res) {
  
    const id = req.query.id;
    const response = await product.findOne({id:id})
    console.log(response);
    
    res.send(response)
  


}

module.exports = searchone;