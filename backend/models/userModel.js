const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add a name"]
    },
    email:{
        type:String,
        required:[true, "Please add an email"],
        unique:true,
        trim:true,
        match:[
             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             "Please enter a valid email"
        ]
    },
    password:{
        type:String,
        required:[true, "Please add a password"],
        minLength:[6,"Password must be upto 6 characters"],
       // maxLength:[23,"Password must not be more than 23 characters"],
    },
    photo:{
        type:String,
        required:[true, "Please add a photo"],
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_219969&psig=AOvVaw1kbxyGSf5dX0T4L-eg2oDa&ust=1719859494184000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjMtpX-g4cDFQAAAAAdAAAAABAE"
    },
    phone:{
        type:String,
        default:"+94"
    },
    bio:{
        type:String,
        maxLength:[255,"Bio must not be 255 characters"],
        default:"bio"
    }
}, 
{
    timestamps:true,
}
);

//Encrypt password before saving to DB
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
  
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  });


const User = mongoose.model("User", userSchema);
module.exports = User;