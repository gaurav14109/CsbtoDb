const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim:true,
        maxlength:32
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    password:{
        type:String,
    }

},{timestamps:true})



const User = mongoose.model('User',UserSchema)
module.exports = User


