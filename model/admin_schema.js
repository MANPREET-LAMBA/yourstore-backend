const { default: mongoose } = require("mongoose");
const mongoo = require("mongoose");

const admin_model = new mongoo.Schema(
    {
        admin_username: {
            type: String,
            required: true,
            manLength: 35
        },
        password:{
            type:String,
            required: true
        }
    }
)

const admin = mongoose.model("admin",admin_model);

module.exports = admin;