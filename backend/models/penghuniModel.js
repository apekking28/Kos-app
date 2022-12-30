import mongoose from "mongoose";
import { Schema } from "mongoose";

const penghuni = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    kamarId: {
      type: Schema.Types.ObjectId,
      ref: "penghuni",
    },
  },
  {
    timestamps: true,
  }
);

const Penghuni = mongoose.model("Penghuni", penghuni);
export default Penghuni;
