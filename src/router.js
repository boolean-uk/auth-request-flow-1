const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const mockUser = {
  username: "authguy",
  password: "mypassword",
  profile: {
    firstName: "Chris",
    lastName: "Wolstenholme",
    age: 43,
  },
};

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const token = jwt.sign({ id: 1, username }, password);
  res.json(token);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username !== "authguy" || password !== "mypassword") {
    res.json(error, "false");
  }
  const token = jwt.sign({ username }, password);
  res.json(token);
});

router.get("/profile", (req, res) => {
  console.log(req.get("authorization"));
  const auth = req.get("authorization");
  try {
    res.json(jwt.verify(auth, "mypassword"));
  } catch (e) {
    res.json("false");
  }
});

module.exports = router;
