const express = require('express');
const router = express.Router();

// require the Drone model here
const Drones = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  Drones.find()
  .then((foundDrones) => {
    res.render('drones/list.hbs', {drones: foundDrones})
  })
  .catch(err => {
    console.log("Something went wrong", err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create({
    name: req.params.name,
    propellers: req.params.propellers,
    maxSpeed: req.params.propellers
  })
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
