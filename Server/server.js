const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const utils = require("./utils");

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (req.url === "/user/login" || req.url === "/user/register") {
    next();
  } else {
    const token = req.headers["token"];

    if (!token || token.length === 0) {
      res.send(utils.FailureResult("missing token"));
    } else {
      try {
        const payload = jwt.verify(token, "54521454");

        req.userId = payload["id"];

        next();
      } catch (ex) {
        res.send(utils.FailureResult("invalid token"));
      }
    }
  }
});

const registerRouter = require("./routes/user");


app.use("/user", registerRouter);

app.listen(4000, "0.0.0.0", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started on PORT 4000");
  }
});
