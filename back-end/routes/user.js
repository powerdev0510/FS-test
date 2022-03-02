const express = require("express");
const user = require("../controllers/user");

const router = express.Router();

router.get("/list", user.getUsers);
router.get("/detail/:id", user.userDetail);

module.exports = router;
