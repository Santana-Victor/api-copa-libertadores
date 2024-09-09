const express = require('express');
const retornaCampeonatos = require('./servico/retornaCampeonatos.js');

const app = express();

app.get('/campeonatos', async (req, res) => {
  const campeonatos = await retornaCampeonatos();

  res.json(campeonatos);
});

app.listen(9000, async () => {
  const data = new Date();
  console.log(`Servidor node iniciado em: ${data}`);
});
