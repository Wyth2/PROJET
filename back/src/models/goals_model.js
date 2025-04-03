import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dailyCalories: { type: Number, required: true },
  dailyProteines: { type: Number, required: true },
  dailyGlucides: { type: Number, required: true },
  dailyLipides: { type: Number, required: true },
});

export default mongoose.model("Goal", GoalSchema);