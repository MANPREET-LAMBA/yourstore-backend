const model = require("../model/sign_schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

function check(user, password, res) {


     if (user == null) {
          console.log(user);
          res.send(false)
     }
}

const login = async (req, res) => {
     const { username, password } = req.body;
     console.log(req.body);
     console.log(username, password);
     let user = await model.findOne({ username: username })

     await check(user, password, res);

     console.log("2 " + username, password);


     if (user != null) {
          console.log("in if");

          const payload = {
               user: user.username,
               passward: user.hashpass,
               email: user.email
          }

          const myPlaintextPassword = password;
          const hash = user.hashpass;

          console.log("compare " + myPlaintextPassword, hash)

          if (! await bcrypt.compare(myPlaintextPassword, hash)) {
               return false

          }
          console.log("hello aaaaaji")
          const token = jwt.sign(payload, process.env.PRIVATEKEY);
          user = user.toObject();
          user.token = token;
          user.hashpass = null;
          user.login = true;
          res.send({ user });
     }

}

module.exports = login;






