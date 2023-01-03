import mongoose from "mongoose";
import { Schema } from "mongoose";

const kos = new Schema(
  {
    kos: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Kos = mongoose.model("Kos", kos);
export default Kos;
