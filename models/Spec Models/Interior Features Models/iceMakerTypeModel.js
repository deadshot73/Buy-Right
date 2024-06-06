import mongoose from "mongoose";
const iceMakerTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Ice Maker Type", iceMakerTypeSchema);
