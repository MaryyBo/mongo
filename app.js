const express = require ('express');
const app = express();
const SaladController = require ('./controllers/salad.controller')
const {errorHandler} = require ('./errorHandler')

app.use(express.json());

//GET http://localhost:5000/
app.get('/', SaladController.getAllSalads);
app.post('/', SaladController.createSalad);
app.get('/:saladId', SaladController.getSalad);
app.put('/:saladId', SaladController.updateSalad);
app.delete('/:saladId', SaladController.deleteSalad);

app.use(errorHandler);

module.exports = app;
