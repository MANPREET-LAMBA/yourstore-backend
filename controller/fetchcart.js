const usermodel = require("../model/sign_schema")
const product = require("../model/product_schema");

const fetchcart = async(req , res)=>{
const user = req.body.user;
const result = await usermodel.findOne({username: user})
console.log(result);

const resultt= result.cartIteam;

const count= resultt.length;
const lastId = resultt[count-1].id
// console.log(lastId);

const data = [];



try {
    const response =  resultt.map(async(e)=>{
        // console.log("---"+e.id)
         await product.findOne({id: e.id})
         .then((result)=>{
           data.push(result);
         })
      
         if(lastId == e.id){
            console.log(data)
           res.send(data)
          }
    })

   
} 
 catch (error) {
    console.log(error)
}






}

module.exports = fetchcart;