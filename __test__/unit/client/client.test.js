const clientService = require('../../../src/app/service/ClientService');

describe('listar todos os clientes', () => {
  it('retornar status 200', async () => {
    const clientMock = {
      nome: 'Rafaela Valerio',
      cpf: '984.964.873-26',
      data_nascimento: '11/10/1995',
      email: 'rafa@gmail.com',
      senha: '123456',
      habilitado: 'sim'
    };
    await clientService.create(clientMock);
    const users = await clientService.getAll({ limit: 5 });
    expect(users.docs[0].nome).toBe(clientMock.nome);
    expect(users.docs[0].cpf).toBe(clientMock.cpf);
    expect(users.docs[0].data_nascimento).toBe(clientMock.data_nascimento);
    expect(users.docs[0].email).toBe(clientMock.email);
    expect(users.docs[0].habilitado).toBe(clientMock.habilitado);
  });
});
