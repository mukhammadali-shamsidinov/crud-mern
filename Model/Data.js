const mongoose = require("mongoose")

const Data = new mongoose.Schema({
  title:{type:String,required:true},
  body:{type:String,required:true},
  page:{type:String,required:true},
})

module.exports = mongoose.model("data", Data);