const express = require('express');
const AppError = require('./utils/ApplicationError');
const globalErrorHandler = require('./Controllers/errorController');

const app = express();

const assistantRoutes = require('./Router/assistantRoutes');

// Body Parser
app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/assistints', assistantRoutes);
app.all('*', (req, res, next) => {
  next(new AppError(`can not find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
