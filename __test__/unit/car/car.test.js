const CarService = require('../../../src/app/service/CarService');

describe('listar todos os carros e criar carros', () => {
  it('Cria carros e lista carros', async () => {
    jest.setTimeout(10000);
    const carMock = {
      modelo: 'testmodelo',
      cor: 'prata',
      ano: '2019',
      acessorios: [
        {
          descricao: 'espelho'
        }
      ],
      quantidadePassageiros: 4
    };
    await CarService.create(carMock);
    const car = await CarService.listAll({ limit: 5 });

    expect(car.docs[0].modelo).toBe(carMock.modelo);
    expect(car.docs[0].cor).toBe(carMock.cor);
    expect(car.docs[0].acessorios.descricao).toBe(carMock.acessorios.descricao);
    expect(car.docs[0].quantidadePassageiros).toBe(carMock.quantidadePassageiros);
  });
});
