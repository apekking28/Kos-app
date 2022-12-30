import mongoose from "mongoose";
import { Schema } from "mongoose";

const kamar = new Schema(
  {
    noKamar: {
      type: String,
      required: true,
      unique: true,
    },
    kosId: {
      type: Schema.Types.ObjectId,
      ref: "Penghuni",
    },
  },
  {
    timestamps: false,
  }
);

const Kamar = mongoose.model("Kamar", kamar);
export default Kamar;
