const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    user: {
      firstName: "john",
      lastName: "doe",
      email: "john.doe@seed.ca",
    },
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
