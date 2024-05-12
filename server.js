const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

// Handlling uncaught exception
process.on('exceptionHandler ', (err) => {
  console.log('Uncought Exception 💥 shutting Down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Connecting to MongoDb database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB Connection is Successful ✌️');
  })
  .catch((err) => {
    console.log(err);
  });

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listining on ${port}.`);
});

// Handling unhandeked Rejection
process.on('promiseErrorHandler', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection 💥 Shutting Down...');
  server.close(() => {
    process.exit(1);
  });
});
