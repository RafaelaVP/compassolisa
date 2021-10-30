const serialize = ({
    _id,
    nome,
    cpf,
    data_nascimento,
    email,
    senha,
    habilitado
  }) => {
    return {
        _id,
        nome,
        cpf,
        data_nascimento,
        email,
        senha,
        habilitado
    };
  };
  
  const paginatedSerialize = ({docs,totalDocs,offset,limit, totalPages}) => {
      return {
          users: docs.map(serialize),
          total: totalDocs,
          offset,
          limit,
          offsets: totalPages
  
      }
  }

  module.exports = paginatedSerialize