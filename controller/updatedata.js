const model = require("../model/product_schema")
const db = require("../connection/database")

 async function updatedata(req,res){
    const query = req.body;
console.log(query)

db();
     await model.updateMany({id:query.id}, {
        $set: 
          {
            productname: query.productname,
            dircription: query.dircription,
            price: query.price,
            Catageory:query.Catageory,
          
          }
      },{new: true})
}

module.exports = updatedata;
