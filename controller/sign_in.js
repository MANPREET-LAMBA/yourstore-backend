// const model = require("../model/sign_up_schema");
const modelschema= require("../model/sign_schema")
const bcrypt = require("bcrypt");

const createuser = async(req,res)=>{
    let {name,username,mobile_no,email,hashpass}= req.body;
    const myPlaintextPassword= hashpass;

   console.log("sjnx")

 bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, async function(err, hash) {
           
            hashpass= hash;
            
            try {
    
                await modelschema.create({username,mobile_no,email,hashpass})
               
            } catch (error) {
                console.error(error);
            }   


        });
    });
 

    
}


module.exports = createuser;