import mongoose from "mongoose";
const bacterialGrowthPreventionSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model(
  "Bacterial Growth Prevention",
  bacterialGrowthPreventionSchema
);
