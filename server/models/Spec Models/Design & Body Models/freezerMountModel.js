import mongoose from "mongoose";
const freezerMountSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Freezer Mount", freezerMountSchema);
