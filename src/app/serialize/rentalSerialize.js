const serialize = ({ _id, nome, cnpj, atividades, endereco }) => ({
  _id,
  nome,
  cnpj,
  atividades,
  endereco
});

const paginatedSerialize = ({ docs, totalDocs, offset, limit, totalPages }) => ({
  locadoras: docs.map(serialize),
  total: totalDocs,
  offset,
  limit,
  offsets: totalPages
});

module.exports = { paginatedSerialize, serialize };
