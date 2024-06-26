import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Brand", brandSchema);
