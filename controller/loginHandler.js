const model = require("../model/sign_schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const login= async(req,res)=>{
const {username, password}= req.body;
console.log(req.body);
console.log(username, password);
let user = await model.findOne({username:username})

if( !user || !password){
     return res.status(403).json({
          success:false,
          message:"user not found"
     })
}
console.log("2 " +username, password);


const payload =  {
     user : user.username,
     passward: user.hashpass,
     email: user.email
     }

const myPlaintextPassword = password;
const hash = user.hashpass;

console.log( "compare " +myPlaintextPassword, hash)

if(! await bcrypt.compare(myPlaintextPassword, hash )){
     return res.status(403).json({
          success:false,
          message:"please enter correct credentials"
     })

}
console.log("hello ji")
const token =  jwt.sign(payload, process.env.PRIVATEKEY);
user = user.toObject();
user.token = token;
user.hashpass= null;
user.login = true;
console.log("hello ji")

//  res.cookie("login", user);
res.send({user});

}

module.exports = login;






