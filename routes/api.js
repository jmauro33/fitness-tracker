const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
router.put("/api/workouts/:id", (req, res) => {

    console.log("params",req.params);
    console.log("body",req.body);
    return
    Workout.findByIdAndUpdate(
        req.params.id,
        {}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  router.post("/api/workouts", ({ body }, res) => {
    console.log("params",req.params);
    console.log("body",req.body);
    return
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  router.get("/api/workouts/range",(req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });

  });

  module.exports = router;