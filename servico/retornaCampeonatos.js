const pool = require('./conexao.js');

async function executaQuery(conexao, query) {
  const resultadoQuery = await conexao.query(query);

  const resposta = resultadoQuery[0];

  return resposta;
}

async function retornaCampeonatos() {
  const conexao = await pool.getConnection();
  const query = 'SELECT * FROM Campeonatos';

  const resposta = executaQuery(conexao, query);

  conexao.release();

  return resposta;
}

async function retornaCampeonatoPeloId(id) {
  const conexao = await pool.getConnection();
  const query = `SELECT * FROM Campeonatos WHERE id = ${id}`;

  const resposta = executaQuery(conexao, query);

  conexao.release();

  return resposta;
}

async function retornaCampeonatoPeloAno(ano) {
  const conexao = await pool.getConnection();
  const query = `SELECT * FROM Campeonatos WHERE ano = ${ano}`;

  const resposta = executaQuery(conexao, query);

  conexao.release();

  return resposta;
}

async function retornaCampeonatoPeloTimeVencedor(time) {
  const conexao = await pool.getConnection();
  const query = `SELECT * FROM Campeonatos WHERE campeao = '${time}'`;

  const resposta = executaQuery(conexao, query);

  conexao.release();

  return resposta;
}

module.exports = {
  retornaCampeonatos,
  retornaCampeonatoPeloId,
  retornaCampeonatoPeloAno,
  retornaCampeonatoPeloTimeVencedor,
};
