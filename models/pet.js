import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema(
  {
    microchipNumber: { type: Number, required: true },
    name: { type: String, required: true },
    specie: { type: String, required: true },
    breed: { type: String, required: true },
    coat: { type: String, required: true },
    height: { type: Number, required: true },
    age: { type: Number, required: true },
    sex: { type: Number, required: true },
    microchippingDate: { type: Date, required: false },
    captureLocalization: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: { type: [Number],  default: [0,0] },
      required: false
    },
    withdrawalDate: { type: Date, required: false },
    sterilizationDate: { type: Date, required: false },
    dewormingDates: { type: [Date], required: false },
    vaccinationDates: { type: [Date], required: false },
    adoptionDate: { type: Date, required: false },
    deathDate: { type: Date, required: false },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
      required: false,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
