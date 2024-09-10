const express = require('express');
const {
  retornaCampeonatos,
  retornaCampeonatoPeloId,
} = require('./servico/retornaCampeonatos.js');

const app = express();

app.get('/campeonatos', async (req, res) => {
  const campeonatos = await retornaCampeonatos();

  res.json(campeonatos);
});

app.get('/campeonatos/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  const campeonato = await retornaCampeonatoPeloId(id);

  if (campeonato.length > 0) {
    res.json(campeonato);
  } else {
    res.status(404).json({ mensagem: 'Nenhum campeonato encontrado' });
  }
});

app.listen(9000, () => {
  const data = new Date();
  console.log(`Servidor node iniciado em: ${data}`);
});
