const mongoose =  require("mongoose");
const validator = require("validator");

// Defining Schema Structure
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 3
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid Email!")
        }
    },
    phone : {
        type : Number,
        required : true,
        minLength : 10
    },
    message : {
        type: String,
        required : true
    }
})

// Creating collections
const user = mongoose.model("user", schema);
module.exports = user;
