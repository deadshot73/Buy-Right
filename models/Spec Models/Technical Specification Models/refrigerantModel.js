import mongoose from "mongoose";
const refrigerantTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Refrigerant Type", refrigerantTypeSchema);
