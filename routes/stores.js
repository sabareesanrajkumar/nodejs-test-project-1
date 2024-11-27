const express = require("express");
const router = express.Router();

const itemController = require("../controllers/items");

router.get("/", itemController.getItems);
router.get("/:name", itemController.searchItem);
router.post("/", itemController.postItems);
router.put("/:id/:number", itemController.buyItem);

module.exports = router;
