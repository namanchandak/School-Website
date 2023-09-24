import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');



import User from "../../models/User";

// console.log("GHjgh");
const handler = async (req, res) => {
  // console.log(req.body+ "naman")
  if (req.method == "POST") {
    // console.log(req.body);

    let user = await User.findOne({ "userid": req.body.userid });
    if (user) {
      const bytes  = CryptoJS.AES.decrypt(user.password, 'secret key 123', { expiresIn: 60 });
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (
        req.body.userid == user.userid &&
        req.body.password == originalText
      ) {
        var token = jwt.sign({  userid: user.userid, name: user.name }, 'shhhhh');
        // console.log("token  generated")
        res.status(200).json( {success:  true ,token});
      }
      else
      {
        res.status(400).json({ success: "false", error :"Invalid Credentials!" });
      }
    }
    else
    {
      res.status(400).json({ success: "false", error :"No User Found!" });
    } 
  }
   else {
    res.status(400).json({ error: "this method is not alowed" });
  }
};

export default connectDb(handler);
