const express = require('express');

const app = express();

app.listen(3333);

app.get('/', (request, response) => {
  return response.send('hello world');
})