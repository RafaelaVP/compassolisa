const RentalService = require('../../../src/app/service/RentalService');

describe('listar todas as locadoras', () => {
  it('cria uma nova locadora e lista as locadoras', async () => {
    const rentalMock = {
      nome: 'Localiza Rent a Car',
      cnpj: '94.228.623/0001-60',
      atividades: 'vender',
      endereco: [
        {
          cep: '60765-190',
          number: '232',
          isFilial: false
        }
      ]
    };
    await RentalService.create(rentalMock);
    const rental = await RentalService.getAll({ limit: 5 });
    expect(rental.docs[0].nome).toBe(rentalMock.nome);
    expect(rental.docs[0].cnpj).toBe(rentalMock.cnpj);
    expect(rental.docs[0].atividades).toBe(rentalMock.atividades);
  });
});
