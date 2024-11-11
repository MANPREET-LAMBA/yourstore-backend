// const model = require("../model/sign_up_schema");
const modelschema= require("../model/sign_schema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const createuser = async(req,res)=>{
    let {name,username,mobile_no,email,hashpass}= req.body;
    const myPlaintextPassword= hashpass;

   console.log("sjnx")

 if(name != null && username != null && mobile_no != null && email != null && hashpass!= null){
    console.log("in if");
    const payload = {
        user: username,
        passward: hashpass,
        email: email
   }
   const token = jwt.sign(payload, process.env.PRIVATEKEY);

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, async function(err, hash) {
           
            hashpass= hash;
            
            try {
    
                await modelschema.create({name,username,mobile_no,email,hashpass})
               
            } catch (error) {
                console.error(error);
            }   

             res.send({username:username,
                succes: true,
                tokken : token
             })
        });
    });
 

 }
 else{
    console.log("in else")
    res.send({ succes: false}) 
}
    
}


module.exports = createuser;