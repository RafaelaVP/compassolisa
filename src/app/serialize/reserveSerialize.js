const moment = require('moment');

const serialize = ({ _id, id_user, data_inicio, data_fim, id_locadora, valor_final }) => ({
  _id,
  id_user,
  data_inicio: moment(data_inicio).utc().format('DD/MM/YYYY'),
  data_fim: moment(data_fim).utc().format('DD/MM/YYYY'),
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
