const request = require('supertest');
const app = require('../../../src/app');

describe('listar todos os clientes', () => {
  it('retornar status 200', async () => {
    jest.setTimeout(20000);
    const clientMock = {
      nome: 'Rafaela Valerio',
      cpf: '035.891.820-08',
      data_nascimento: '11/10/1995',
      email: 'rafa@gmail.com',
      senha: '123456',
      habilitado: 'sim'
    };

    const response = await request(app).post('/api/v1/people/').send(clientMock);
    const res = await request(app).get(`/api/v1/people/${response.body._id}`);
    expect(res.body).toHaveProperty('_id');
    const { status } = res;
    expect(status).toBe(200);
  });
});
