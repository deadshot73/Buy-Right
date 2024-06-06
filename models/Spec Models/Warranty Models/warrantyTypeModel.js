import mongoose from "mongoose";
const warrantyTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Warranty Type", warrantyTypeSchema);
