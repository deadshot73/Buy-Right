import mongoose from "mongoose";
const refrigeratorTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Refrigerator Type", refrigeratorTypeSchema);
