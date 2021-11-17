/* eslint-disable eqeqeq */
function validarCNPJ(cnpj) {
  const Cnpj = cnpj.replace(/[^\d]+/g, '');

  if (
    Cnpj === '00000000000000' ||
    Cnpj === '11111111111111' ||
    Cnpj === '22222222222222' ||
    Cnpj === '33333333333333' ||
    Cnpj === '44444444444444' ||
    Cnpj === '55555555555555' ||
    Cnpj === '66666666666666' ||
    Cnpj === '77777777777777' ||
    Cnpj === '88888888888888' ||
    Cnpj === '99999999999999'
  )
    throw new Error({
      description: 'Bad Request',
      name: `Invalid CNPJ ${cnpj}`
    });

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  let i;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0))
    throw new Error({
      description: 'Bad Request',
      name: `Invalid cnpj ${cnpj}`
    });

  tamanho += 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1))
    throw new Error({
      description: 'Bad Request',
      name: `Invalid cnpj ${cnpj}`
    });
  const trueCnpj = cnpj.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4');
  return trueCnpj;
}

module.exports = validarCNPJ;
