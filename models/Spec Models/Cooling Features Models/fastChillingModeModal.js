import mongoose from "mongoose";
const fastChillingModeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Fast Chilling Mode", fastChillingModeSchema);
