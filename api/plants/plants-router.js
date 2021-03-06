const router = require("express").Router();
const Plant = require("./plants-model");
const { restricted } = require("../auth/auth-middleware");
const { checkUserId } = require("../users/users-middleware");

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

router.get(
  "/user/:user_id",
  restricted,
  checkUserId,
  async (req, res, next) => {
    const { user_id } = req.params;
    Plant.findAllByUserId(user_id)
      .then((plants) => {
        res.json(plants);
      })
      .catch(next);
  }
);

router.post("/", restricted, async (req, res, next) => {
  try {
    req.body.user_id = req.decodedToken.subject;
    const data = await Plant.addPlant(req.body);
    return res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:plant_id", restricted, async (req, res, next) => {
  try {
    const data = await Plant.updatePlant(req.body, req.params.plant_id);
    return res.json(data);
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
