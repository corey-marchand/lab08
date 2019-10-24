'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// const categoryRouter = require('../routes');

// cors 
app.use(cors());

// api route logging
app.use(morgan('dev'));
app.use(express.json());

// app.use('/api', categoryRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on ${port}`));
  }
}


