import mongoose from "mongoose";
const gasketTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Gasket Type", gasketTypeSchema);
