'use strict';

console.log('Hello World');
const express = require('express');
const app = express();

app.get('/', (req, res) => {

	res.send('My First Node App.');
});
app.listen(3000);
