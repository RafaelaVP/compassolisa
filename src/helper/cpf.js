function validCPF(cpf) {
  const Cpf = cpf.replace(/[^\d]+/g, '');
  if (
    Cpf.length !== 11 ||
    Cpf === '00000000000' ||
    Cpf === '11111111111' ||
    Cpf === '22222222222' ||
    Cpf === '33333333333' ||
    Cpf === '44444444444' ||
    Cpf === '55555555555' ||
    Cpf === '66666666666' ||
    Cpf === '77777777777' ||
    Cpf === '88888888888' ||
    Cpf === '99999999999'
  )
    throw new Error({
      description: 'Bad Request',
      name: `Invalid CPF ${cpf}`
    });

  let add = 0;
  let i;
  let rev;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i), 10) * (10 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9), 10))
    throw new Error({
      description: 'Bad Request',
      name: `Invalid CPF ${cpf}`
    });

  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i), 10) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10), 10))
    throw new Error({
      description: 'Bad Request',
      name: `Invalid CPF ${cpf}`
    });
  const trueCpf = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4');
  return trueCpf;
}

module.exports = validCPF;
