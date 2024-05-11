const express = require("express");
// const morgan = require("morgan");

const app = express();

const assitintRouter = require("./Router/assistintRoutes");

// app.use((req, res, next) => {
//   console.log("Hello from the middleware 👋");
//   next();
// });

// Body Parser
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/assistints", assitintRouter);

module.exports = app;
