const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const customers = [];

/**
* id - uuid
* name - string
* cpf - string
* statement - [] (extrato)
*/
app.post('/account', (request, response) => {
  const { cpf, name } = request.body;

  customers.push({
    id: uuidv4(),
    name,
    cpf,
    statement: [],
  });

  return response.status(201).send();
});

app.get('/', (request, response) => {
  return response.send('hello world');
});

app.listen(3333);