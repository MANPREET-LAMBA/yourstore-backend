const usermodel = require("../model/sign_schema");

async function addtocart(req,res){
console.log(req.body);
const id = req.body.id;
const user = req.body.user;


console.log("ndcnnadnn----");


const pushData = async(id)=>{
    const dbuser= await usermodel.findOne({username : user})
    
    console.log(user);
    dbuser.cartIteam.push({id})
   await dbuser.save();
   res.send(dbuser);
}
await pushData(id);

// console.log(user);




}

module.exports = addtocart;