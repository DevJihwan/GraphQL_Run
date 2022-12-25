const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const graphRouter = require('./route/graphql');

const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5000'],
    methods: ['GET', 'POST'],
    credentials: true
  })
);

app.get('/', function(req, res, next) {
  res.status(200).send({"message": "GraphQL server is starting..."});
});
app.use('/graphql', graphRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      errors: {
          message: err.message,
      },
  });
});

app.listen(port, () => {
  console.log(`
  ################################################
  🟣  GraphQL is listening on port: ${port} 🟣
  http://localhost:${port}
  ################################################
  `);
});

module.exports = app;