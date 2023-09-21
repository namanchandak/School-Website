const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userid : {type: String, required : true, unique : true}, // String is shorthand for {type: String}
    password : {type: String, required : true},
    name : {type: String, required : true}
  });

  mongoose.models ={}
  export default mongoose.model("User", user)
