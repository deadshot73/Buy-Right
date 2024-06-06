import mongoose from "mongoose";
const indicatorLightSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Indicator Light", indicatorLightSchema);
