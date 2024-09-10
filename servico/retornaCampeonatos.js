const pool = require('./conexao.js');

async function retornaCampeonatos() {
  const conexao = await pool.getConnection();

  const tabelaCampeonatos = await conexao.query('SELECT * FROM Campeonatos');
  const campeonatos = tabelaCampeonatos[0];

  conexao.release();

  return campeonatos;
}

async function retornaCampeonatoPeloId(id) {
  const conexao = await pool.getConnection();

  const tabelaCampeonatos = await conexao.query(
    `SELECT * FROM Campeonatos WHERE id = ${id}`
  );
  const campeonato = tabelaCampeonatos[0];

  conexao.release();

  return campeonato;
}

async function retornaCampeonatoPeloAno(ano) {
  const conexao = await pool.getConnection();

  const tabelaCampeonatos = await conexao.query(
    `SELECT * FROM Campeonatos WHERE ano = ${ano}`
  );
  const campeonato = tabelaCampeonatos[0];

  conexao.release;

  return campeonato;
}

module.exports = {
  retornaCampeonatos,
  retornaCampeonatoPeloId,
  retornaCampeonatoPeloAno,
};
