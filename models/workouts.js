const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "exercise-type"
    },
    value: {
      type: Number,
      required: "# of reps"
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;