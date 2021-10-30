  const serialize = ({
    _id,
    modelo,
    cor,
    ano,
    acessorios,
    quantidadePassageiros,
  }) => {
    return {
      _id,
      modelo,
      cor,
      ano,
      acessorios,
      quantidadePassageiros,
    };
  };
  
  const paginatedSerialize = ({docs,totalDocs,offset,limit, totalPages}) => {
      return {
          veiculos: docs.map(serialize),
          total: totalDocs,
          offset,
          limit,
          offsets: totalPages
  
      }
  }

  module.exports = paginatedSerialize

