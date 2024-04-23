const express = require("express");
const db = require("../db");

const utils = require("../utils");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", (req, res) => {
  const { fullName, email, password, phoneNO } = req.body;
  const statement =
    "insert into user ( fullName, email, password, phoneNO) values(?,?,?,?);";
  db.pool.execute(
    statement,
    [fullName, email, password, phoneNO],
    (err, result) => {
      if (err) {
        utils.FailureResult(err);
        console.log("err");
      } else {
        res.send(utils.SuccessResult("Register successfully"));
        console.log("uSer Register");
      }
    }
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const statement =
    "select fullName, email, password, phoneNO from user where email=? and password=?;";
  db.pool.execute(statement, [email, password], (err, result) => {
    if (err) {
      res.send(utils.FailureResult(err));
    } else {
      const user = result[0];

      const payload = { id: user.id };
      const token = jwt.sign(payload, "54521454");
      const userData = {
        token,
        name: `${user["fullName"]}`,
      };
      // console.log(token);
      res.send(utils.SuccessResult(userData));
    }
  });
});

module.exports = router;
