const axios = require('axios');

const buscarEndereco = async (cep) => axios.get(`https://viacep.com.br/ws/${cep}/json`).then((result) => result.data);

module.exports = buscarEndereco;
