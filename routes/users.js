const express = require("express");
const router = express.Router();

//Register a new user
//@route POST api/users
//@desc Register a user
//@access Public
router.post("/", (req, res) => {
  res.send("Register a user");
});
module.exports = router;
