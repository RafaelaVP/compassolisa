const serialize = ({ _id, id_user, data_inicio, data_fim, id_locadora, valor_final }) => ({
  _id,
  id_user,
  data_inicio,
  data_fim,
  id_locadora,
  valor_final
});

const paginatedSerialize = ({ docs, totalDocs, offset, limit, totalPages }) => ({
  reservas: docs.map(serialize),
  total: totalDocs,
  offset,
  limit,
  offsets: totalPages
});

module.exports = { paginatedSerialize, serialize };
