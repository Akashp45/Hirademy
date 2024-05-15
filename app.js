const express = require('express');
const AppError = require('./utils/ApplicationError');
const globalErrorHandler = require('./Controllers/errorController');
const assistantRoutes = require('./Router/assistantRoutes');

const app = express();

// Body Parser : Use to get access of request body
app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1/assistant', assistantRoutes);

// If We hit Route which is not there
app.all('*', (req, res, next) => {
  next(new AppError(`can not find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
