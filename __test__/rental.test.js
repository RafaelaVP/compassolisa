const request = require('supertest')
const app = require('../src/app')
const Rental = require('../src/app/schema/schemaRentalCompany')
const RentalService = require('../src/app/service/RentalService')

beforeAll(async () => {
    await Rental.deleteMany();
  });


describe('listar todas as locadoras', () => {
    it('cria uma nova locadora e lista as locadoras', async()=>{
        jest.setTimeout(10000);
       const rentalMock = {
              nome: "Localiza Rent a Car",
              cnpj: "64.646.687/0001-10",
              atividades: "vender",
              endereco: [{
              cep:"60765-190", 
              number:"232",         
              isFilial: false
              }   
              ],
       }
        const newRental = await RentalService.create(rentalMock)
        const rental = await RentalService.getAll({limit:5})
        expect(rental.docs[0].nome).toBe(rentalMock.nome);
        expect(rental.docs[0].cnpj).toBe(rentalMock.cnpj);
        expect(rental.docs[0].atividades).toBe(rentalMock.atividades);
          
    });
   });
