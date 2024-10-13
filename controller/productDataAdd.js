const model = require("../model/product_schema");
const cloudinary = require("cloudinary")



 function file_upload( image, folder)
{ 
   const options = {folder} 
 return cloudinary.v2.uploader.upload(image.path, {options},(error, result)=>{
   console.log( result);

   
 });
}

function checkextension(image_type,image_extension){
   console.log(image_extension)
   return image_type.includes(image_extension);
   }
  



async function dataToDB(req, res) {

   const { productname, dircription, price, category} = req.body;
   
console.log(req.body)
console.log( productname, dircription, price, category)

   const image = req.file;

 const image_name= image.originalname;
 const image_extension = image_name.split(".")[1];

   const image_type = ["png", "jpg", "jpeg" ];
   if(! await checkextension(image_type,image_extension))
   {
      console.log("file does not supported");
   }
   


  const response=  await file_upload(image, "manpreet");
  

 const time = new Date()


   try {
      await model.create({ id: time, productname, dircription, price, category, image: response.url });

   } catch (error) {
      console.log(error)
   }
}

module.exports = dataToDB; 