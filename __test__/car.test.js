const request = require('supertest')
const app = require('../src/app')
const Car = require('../src/app/schema/schemaCar')

//beforeAll(async () => {
   // await Car.deleteMany();
 // });


describe('listar todos os carros', () => {
    it('retornar status 200', async () => {
        jest.setTimeout(10000);
    const carMock = {
        modelo: "testmodelo",
        cor: "prata",
       ano: "2019",
       acessorios: [{
           descricao:"espelho"
       }   
       ],
       quantidadePassageiros:4
   }
    
    await request(app).post('/api/v1/car').send(carMock);
    
    const response = await request(app).get('/api/v1/car');
    const { body } = response;
    const { veiculos } = body;
    expect(veiculos[0].modelo).toBe(carMock.modelo);
    expect(veiculos[0].cor).toBe(carMock.cor);
    expect(veiculos[0].acessorios.descricao).toBe(carMock.acessorios.descricao);
    expect(veiculos[0].quantidadePassageiros).toBe(carMock.quantidadePassageiros);
    const { status } = response;
    expect(status).toBe(200);
    });
   });