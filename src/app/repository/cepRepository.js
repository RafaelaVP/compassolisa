const  axios = require("axios");

const getURL = "https://viacep.com.br/ws/NUMERO_DO_CEP/json";

const buscarEndereco = async (cep) => {
    return axios 
   .get(`https://viacep.com.br/ws/${cep}/json`)
   .then(result => result.data)
}



    

module.exports = buscarEndereco