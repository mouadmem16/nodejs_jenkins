'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello From Node js Server, Mouaad ELMASLOUHY </h1>');
});

app.get('/admin', (req, res) => {
  res.send('<h1>Hello From Admin </h1>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);