import mongoose from "mongoose";
const airCirculationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Air Circulation", airCirculationSchema);
