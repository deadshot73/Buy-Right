import mongoose from "mongoose";
const bodyMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Body Material", bodyMaterialSchema);
