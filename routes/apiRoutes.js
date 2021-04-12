const router = require("express").Router();
const { test } = require("../Controllers/testController");

router.get("/api/test", test);

module.exports = router;