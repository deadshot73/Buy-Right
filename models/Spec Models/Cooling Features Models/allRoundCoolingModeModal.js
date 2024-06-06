import mongoose from "mongoose";
const allRoundCoolingModeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model(
  "All Round Cooling Mode",
  allRoundCoolingModeSchema
);
