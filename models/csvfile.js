const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
 title:{
    type:String,
    required:true
 },
 description:String
}, {timestamps:true});

const File = mongoose.model("File", FileSchema);
module.exports = File;
