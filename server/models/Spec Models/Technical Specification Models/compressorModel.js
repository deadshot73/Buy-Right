import mongoose from "mongoose";
const compressorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Compressor", compressorSchema);
