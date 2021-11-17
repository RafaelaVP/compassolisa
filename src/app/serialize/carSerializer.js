const serialize = ({ _id, modelo, cor, ano, acessorios, quantidadePassageiros }) => ({
  _id,
  modelo,
  cor,
  ano,
  acessorios,
  quantidadePassageiros
});

const paginatedSerialize = ({ docs, totalDocs, offset, limit, totalPages }) => ({
  veiculos: docs.map(serialize),
  total: totalDocs,
  offset,
  limit,
  offsets: totalPages
});

module.exports = { paginatedSerialize, serialize };
