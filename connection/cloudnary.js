const cloudinary = require('cloudinary').v2;;

const cloudconnection= async()=>{
   try {
    await cloudinary.config({
         cloud_name: 'dnw9zc5ps',
         api_key: process.env.CLOUDINARY_API_KEY,
         api_secret: process.env.CLOUDINARY_API_SECRET,
         secure: true,
     })
   } catch (error) {
    console.log("connection error")
   }
   
}

module.exports = cloudconnection;