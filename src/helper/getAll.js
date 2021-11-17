/* eslint-disable no-restricted-syntax */
module.exports = function validateType(object) {
  for (const [key, value] of Object.entries(object)) {
    if (key === 'ano' || key === 'quantidadePassageiros') {
      object[key] = Number(value);
    } else if (key === 'acessorios') {
      object[key] = {
        descricao: value
      };
    } else {
      object[key] = new object[key]();
    }
  }
  return object;
};
