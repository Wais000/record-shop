import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  record: {
    type: Number,
    required: true,
  },
});
const UserModel= mongoose.model("User", UserSchema)
export default UserModel