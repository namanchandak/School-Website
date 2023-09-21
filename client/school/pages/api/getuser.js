import connectDb from "../../middleware/mongoose";

import User from "../../models/User";

// console.log("GHjgh")
const handler =async (req,res)=>
{
        let name =  await User.find()
        console.log(name)
        res.status(200 ).json({name})
} 

export default connectDb(handler)