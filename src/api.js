const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (_, res) => {
  res.json({
    user: {
      firstName: "john",
      lastName: "john",
      email: "john.doe@seed.ca",
    },
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
