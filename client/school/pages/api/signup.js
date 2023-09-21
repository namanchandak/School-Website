import connectDb from "../../middleware/mongoose";

import User from "../../models/User";

// console.log("GHjgh");
const handler = async (req, res) => {
  // console.log(req.body+ "naman")
  if (req.method == "POST") {
    
    console.log(req.body)

    let u = new User (req.body)
    await u.save()
    res.status(200).json({ success: "success" });

  } else {
    res.status(400).json({ error: "this method is not alowed" });
  }

};

export default connectDb(handler);
