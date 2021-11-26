const request = require('supertest');
const app = require('../../../src/app');

describe('create client', () => {
  it('returns status 201', async () => {
    const clientMock = {
      nome: 'Rafaela Valerio',
      cpf: '984.964.873-26',
      data_nascimento: '11/10/1995',
      email: 'rafa@gmail.com',
      senha: '123456',
      habilitado: 'sim'
    };
    const res = await request(app).post('/api/v1/people/').send(clientMock);
    expect(res.statusCode).toEqual(201);

    expect(res.body).toHaveProperty('_id');
  });
  it('returns bad request ', async () => {
    const clientMock = {
      nome: 'Rafaela Valerio',
      cpf: '984.964.873-26',
      data_nascimento: '11/10/1995',
      email: 'rafa@gmail.com',
      senha: '123456',
      habilitado: ''
    };
    const res = await request(app).post('/api/v1/people/').send(clientMock);
    expect(res.statusCode).toEqual(400);
  });
});
