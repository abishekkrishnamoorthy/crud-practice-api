const mongo=require("mongoose")

const userschema=mongo.Schema(
   {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
)
const user=mongo.model('User',userschema)
module.exports=user;