import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    media: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
