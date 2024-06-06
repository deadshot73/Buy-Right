import mongoose from "mongoose";
const fastIceModeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Fast Ice Mode", fastIceModeSchema);
