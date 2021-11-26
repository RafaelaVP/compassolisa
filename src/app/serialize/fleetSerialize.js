const serialize = ({ _id, id_carro, status, valor_diaria, id_locadora, placa }) => ({
  _id,
  id_carro,
  status,
  valor_diaria,
  id_locadora,
  placa
});

const paginatedSerialize = ({ docs, totalDocs, offset, limit, totalPages }) => ({
  frota: docs.map(serialize),
  total: totalDocs,
  offset,
  limit,
  offsets: totalPages
});

module.exports = { paginatedSerialize, serialize };
