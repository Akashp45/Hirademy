const express = require('express');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./Controllers/errorController');
// const morgan = require("morgan");

const app = express();

const assitintRouter = require('./Router/assistintRoutes');

// app.use((req, res, next) => {
//   console.log("Hello from the middleware 👋");
//   next();
// });

// Body Parser
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/assistints', assitintRouter);
app.all('*', (req, res, next) => {
  // const err = new Error(`can't find ${req.originalUrl} on the server`);
  // err.statusCode = 404;
  // err.status = 'fail';
  // next(err);
  next(new AppError(`can not find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
