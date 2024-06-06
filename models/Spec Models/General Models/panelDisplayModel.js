import mongoose from "mongoose";
const panelDisplaySchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Panel Display", panelDisplaySchema);
