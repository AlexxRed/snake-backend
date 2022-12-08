const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/player");

const  ctrlWrapper  = require("../../services/ctrlWrapper");


router.post("/", ctrlWrapper(ctrl.addPlayer));
router.get("/", ctrlWrapper(ctrl.getPlayers));

module.exports = router;