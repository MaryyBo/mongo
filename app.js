const express = require ('express');
const app = express();

app.use(express.json());

app.get('/');
app.post('/');
app.get('/:saladId');
app.put('/:saladId');
app.delete('/:saladId');


module.exports = app;
