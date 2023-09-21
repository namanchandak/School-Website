import connectDb from "../../middleware/mongoose";

import User from "../../models/User";

// console.log("GHjgh");
const handler = async (req, res) => {
  // console.log(req.body+ "naman")
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await User.findByIdAndUpdate(req.body[i]._id, req.body[i])
      

      // console.log(p)
    }
    
    res.status(200).json({ success: "success" });

  } else {
    res.status(400).json({ error: "this method is not alowed" });
  }

};

export default connectDb(handler);
