import mongoose from "mongoose";

const { Schema } = mongoose;

const ownerSchema = new Schema(
  {
    name: { type: String, required: true },
    rg: { type: String, required: true },
    cpf: { type: Number, required: true },
    address: { type: String, required: true },
    telephones: { type: [Number], required: true },
  },
  { timestamps: true }
);

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
