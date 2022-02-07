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
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
Drones.create({
  name: req.body.name,
  propellers: req.body.propellers,
  maxSpeed: req.body.maxSpeed
}).then((results) => {
console.log("Drone was created", results)
res.redirect("/drones")
}).catch(err => {
  console.log ("Something went wrong", err)
});
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
Drones.findById(req.params.id)
.then((foundDrone) => {
  console.log("We found this drone", foundDrone)
  res.render('drones/update-form.hbs', {drone: foundDrone})
})
.catch(err => {
  console.log("Something went wrong", err)
})
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drones.findByIdAndUpdate(req.params.id, {
    name: req.body.name, 
    propellers: req.body.propellers, 
    maxSpeed: req.body.maxSpeed,
    })
  .then((updatedDrone)=>{
    res.redirect('/drones')
  })
  .catch(err=>{
    console.log("Something went wrong", err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drones.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect("/drones");
    console.log("Drone Deleted");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  })
});

module.exports = router;
