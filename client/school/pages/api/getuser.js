import connectDb from "../../middleware/mongoose";

import User from "../../models/User";

console.log("GHjgh")
const handler =async (req,res)=>
{
    
        let name =  await User.find()
        res.status(200 ).json({User})


} 

export default connectDb(handler  )