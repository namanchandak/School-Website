import connectDb from "../../middleware/mongoose";

import User from "../../models/User";

console.log("GHjgh");
const handler = async (req, res) => {
  // console.log(req.body+ "naman")
  if (req.method == "POST") {
    // console.log(req.body);

    let user = await User.findOne({ "userid": req.body.userid });
    if (user) {
      if (
        req.body.userid == user.userid &&
        req.body.password == user.password
      ) {
        // console.log("success")
        res.status(200).json({ success: "success", userid: user.userid, name: user.name });
      }
      else
      {
        res.status(200).json({ success: "false", error :"Invalid Credentials!" });
      }
    }
    else
    {
      res.status(200).json({ success: "false", error :"No User Found!" });
    } 
  }
   else {
    res.status(400).json({ error: "this method is not alowed" });
  }
};

export default connectDb(handler);
