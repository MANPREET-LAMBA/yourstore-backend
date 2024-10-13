const express = require("express");
const sign_up = require("../controller/sign_in")
const storeroute= express.Router();

const storage = require("../fileupload");
const multer  = require('multer')
const upload = multer({storage})

//sign up data to db
const sign_in = require("../controller/sign_in")
storeroute.post("/sign_up",sign_in);

//login
const login = require("../controller/loginHandler");
storeroute.post("/login",login)

//PRODUCT DATA TO DATABASE
const porductEntry = require("../controller/productDataAdd");
storeroute.post("/product_add_db",upload.single('file'),porductEntry);

//admin info
const adminEntry = require("../controller/adminhandler");
storeroute.post("/admin_sign",adminEntry);


//alter any data
const dataAlter = require("../controller/updatedata");
storeroute.get("/data_update",dataAlter);

//search
const search = require("../controller/searchquery");
storeroute.get("/searchquery",search);




module.exports = storeroute;