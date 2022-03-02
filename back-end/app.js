const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

global.__basedir = __dirname;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "100mb" }));

// Add routes
app.use("/api/v1", routes);

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: { message: err.message } });
});

module.exports = app;
