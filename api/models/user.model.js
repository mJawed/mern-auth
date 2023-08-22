import mongoose, { model }  from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required:[true,'User Name is Required'],
        unique:true,

    },
    email:{
        type: String,
        require:[true,"email is required"],
        unique: true

    },
    password:{
        type: String,
        require:[true,"Password is rquired"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLenght:[4,"Name cannot less then 30 characters" ]
    },


},{timestamps:true});

module.exports = mongoose.model("user",userSchema)