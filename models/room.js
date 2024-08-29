import mongoose from "mongoose";
const roomsSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    roomName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    amenities: {
      type: String,
      default: null,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    roomNumber: {
      type: Number,
      required: true,
    },
    photo: {
      type: Array,
      default: null,
    },
  },
  { timestamps: true }
);
const Room = mongoose.model("Room", roomsSchema);
export default Room;
