const express = require ('express');
const app = express();
const {errorHandler} = require ('./errorHandler');

const router = require('./routes')

app.use(express.json());

//http://localhost:5000/api

app.use('/api', router)

app.use(errorHandler);

module.exports = app;
