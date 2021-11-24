const request = require('supertest');
const app = require('../../src/app');

describe('listar todos os clientes', () => {
  it('retornar status 200', async () => {
    jest.setTimeout(10000);
    const clientMock = {
      nome: 'Rafaela Valerio',
      cpf: '035.891.820-08',
      data_nascimento: '11/10/1995',
      email: 'rafa@gmail.com',
      senha: '123456',
      habilitado: 'sim'
    };

    await request(app).post('/api/v1/people/').send(clientMock);

    const response = await request(app).get('/api/v1/people/');
    const { body } = response;
    const { users } = body;
    expect(users[0].nome).toBe(clientMock.nome);
    expect(users[0].cpf).toBe(clientMock.cpf);
    expect(users[0].data_nascimento).toBe(clientMock.data_nascimento);
    expect(users[0].email).toBe(clientMock.email);
    expect(users[0].habilitado).toBe(clientMock.habilitado);
    const { status } = response;
    expect(status).toBe(200);
  });
});
