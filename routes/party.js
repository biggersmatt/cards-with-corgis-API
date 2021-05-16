const router = require("express").Router();
const controllers = require("../controllers");

// Current Path = "/party"

router.get("/", controllers.party.index);
router.post("/", controllers.party.create);

module.exports = router;