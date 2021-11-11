const serialize = ({
    _id,
    nome,
    cnpj,
    atividades,
    endereco
    
  }) => {
    return {
        _id,
        nome,
        cnpj,
        atividades,
        endereco      
        
    };
  };
  
  const paginatedSerialize = ({docs,totalDocs,offset,limit, totalPages}) => {
      return {
          locadoras: docs.map(serialize),
          total: totalDocs,
          offset,
          limit,
          offsets: totalPages
  
      }
  }

  module.exports = {paginatedSerialize, serialize}
