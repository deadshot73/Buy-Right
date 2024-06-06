import mongoose from "mongoose";
const maintainFoodVitalsSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model(
  "Food Vitals Technology",
  maintainFoodVitalsSchema
);
