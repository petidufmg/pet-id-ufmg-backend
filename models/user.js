import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true });
const User = mongoose.model("User", userSchema);
export default User;