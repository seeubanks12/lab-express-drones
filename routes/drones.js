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
const { id: droneId } = req.params;
  console.log(droneId);
  Drones.findById(droneId)
    .then((foundDrone) => {
      console.log("this is your drone: " + foundDrone);
      res.render("drones/update-form.hbs", { drone: foundDrone });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
const { id: droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  console.log(droneId, name, propellers, maxSpeed);
  Drones.findOneAndUpdate(
    { _id: droneId },
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then(() => {
      console.log("drone updated");
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
