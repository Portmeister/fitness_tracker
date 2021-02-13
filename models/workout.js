const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter name of exercise"
      },
      duration: {
        type: Number,
        required: "Enter amount of time spent"
      },
      weight: {
        type: Number,
        required: "Enter amount of weight"
      },
      reps: {
        type: Number,
        required: "Enter amount of reps"
      },
      sets: {
        type: Number,
        required: "Enter amount of sets"
      },
      distance: {
        type: Number,
        required: "Enter distance"
      }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;