const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "exercise-type"
    },
    name: {
      type: String,
      trim: true,
      required: "workout-type"
    },
    weight: {
      type: Number,
      trim: true,
      required: "weight-amount"
    },
    sets: {
      type: Number,
      trim: true,
      required: "number-of-sets"
    },
    reps:{
      type: Number,
      trim: true,
      required: "number-of-reps"
    },
    duration:{
      type: Number,
      trim: true,
      required: "duration-of-exercise"
    }
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;