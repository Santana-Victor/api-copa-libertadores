const express = require('express');
const {
  retornaCampeonatos,
  retornaCampeonatoPeloId,
  retornaCampeonatoPeloAno,
  retornaCampeonatoPeloTimeVencedor,
} = require('./servico/retornaCampeonatos.js');

const app = express();

app.get('/campeonatos', async (req, res) => {
  let campeonatos;

  const ano = req.query.ano;
  const time = req.query.time;

  if (typeof ano === 'undefined' && typeof time === 'undefined') {
    campeonatos = await retornaCampeonatos();
  } else if (typeof ano !== 'undefined') {
    campeonatos = await retornaCampeonatoPeloAno(parseInt(ano));
  } else if (typeof time !== 'undefined') {
    campeonatos = await retornaCampeonatoPeloTimeVencedor(time);
  }

  if (campeonatos.length > 0) {
    res.json(campeonatos);
  } else {
    res.status(404).json({ mensagem: 'Nenhum campeonato encontrado' });
  }
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
