const express = require("express")
const router = express.Router();

router.route("/plants").get();
router.route("/plants/:id").get();