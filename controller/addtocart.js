const usermodel = require("../model/sign_schema");

async function addtocart(req,res){
console.log(req.body);
const id = req.body.id;

const user = await usermodel.findOne({username:req.body.user});
console.log("ndcnnadnn----");

console.log(user);

await user.cartIteam.push({id})
await user.save();
console.log(user);


res.send(user);

}

module.exports = addtocart;