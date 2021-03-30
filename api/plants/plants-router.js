const router = require("express").Router();
const Plant = require("./plants-model");

router.get("/", (req, res, next) => {
  Plant.find()
    .then((plants) => {
      res.json(plants);
    })
    .catch(next);
});

router.get("/:plant_id", (req, res, next) => {
  const { plant_id } = req.params;
  Plant.findById(plant_id)
    .then((plant) => {
      res.json(plant);
    })
    .catch(next);
});

module.exports = router;
