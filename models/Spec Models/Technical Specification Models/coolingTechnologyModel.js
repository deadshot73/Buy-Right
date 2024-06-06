import mongoose from "mongoose";
const coolingTechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Cooling Technology", coolingTechnologySchema);
