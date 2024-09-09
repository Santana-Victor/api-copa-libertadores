const pool = require('./conexao.js');

async function retornaCampeonatos() {
  const conexao = await pool.getConnection();

  const tabelaCampeonatos = await conexao.query('SELECT * FROM Campeonatos');
  const campeonatos = tabelaCampeonatos[0];

  conexao.release();

  return campeonatos;
}

module.exports = retornaCampeonatos;
