const request = require('supertest');
const app = require('../../../src/app');
const { ClientDataFaker } = require('../support/dataFaker/clientDataFaker');

describe.only('listar todos os clientes', () => {
  it('retornar status 200', async () => {
    jest.setTimeout(10000);
    const clientMock = ClientDataFaker();

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
