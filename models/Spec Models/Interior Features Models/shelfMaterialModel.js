import mongoose from "mongoose";
const shelfMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Shelf Material", shelfMaterialSchema);
