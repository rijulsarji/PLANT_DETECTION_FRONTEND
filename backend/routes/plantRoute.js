const express = require("express");
const { createPlants, getPlants, getPlantDetails, sendMessage } = require("../controllers/plantController");
const router = express.Router();

router.route("/plants").get(getPlants).post(createPlants);
router.route("/plants/:id").get(getPlantDetails);
router.route("/message").post(sendMessage);

module.exports = router;