import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    address: { type: String, required: true },
    institution: { type: String, required: true },
    type: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);
export default User;
