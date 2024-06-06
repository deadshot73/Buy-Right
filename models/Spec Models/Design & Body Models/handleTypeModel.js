import mongoose from "mongoose";
const handleTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Handle Type", handleTypeSchema);
