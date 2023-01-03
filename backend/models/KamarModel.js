import mongoose from "mongoose";
import { Schema } from "mongoose";

const kamar = new Schema(
  {
    noKamar: {
      type: String,
      required: true,
    },
    kosId: {
      type: Schema.Types.ObjectId,
      ref: "Penghuni",
    },
  },
  {
    timestamps: true,
  }
);

const Kamar = mongoose.model("Kamar", kamar);
export default Kamar;
