const router = require("express").Router();
const Plant = require("./plants-model");
const { restricted } = require("../auth/auth-middleware");

router.get("/", restricted, (req, res, next) => {
  Plant.find()
    .then((plants) => {
      res.json(plants);
    })
    .catch(next);
});

router.get("/:plant_id", restricted, (req, res, next) => {
  const { plant_id } = req.params;
  Plant.findById(plant_id)
    .then((plant) => {
      res.json(plant);
    })
    .catch(next);
});

router.post("/", restricted, async (req, res, next) => {
  try {
    req.body.user_id = req.decodedToken.subject;
    const data = await Plant.addPlant(req.body);
    return res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:plant_id", restricted, async (req, res, next) => {
  try {
    Plant.removePlant(parseInt(req.params.plant_id));
    return res
      .status(200)
      .json(`The plant with ID: ${req.params.plant_id} was removed.`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
