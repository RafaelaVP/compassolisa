const ClientRepository = require('../repository/ClientRepository')
const CarRepository = require('../repository/CarRepository')
const RentalRepository = require('../repository/RentalRepository')

describe("Create client", () =>{
    it("Deve ser possível criar um novo cliente", async ()=>{
        const clientsRepository = new ClientRepository();
        const createClientService = new CreateClientService(clientsRepository);

        const clientData = {
            name: "testname",
            email: "test@test.com",
            cpf: "624.343.203-33",
            data_nascimento:"10/10/1910",
            senha:"123456",
            habilitado:"sim"
        }

        const client = await createClientService.execute(clientData)
        
        expect(client).toHAVEPropery("_id");
        expect(clientData.name).toBe("testname");
        
    });
});

describe("Create car", () =>{
  it("Deve ser possível criar um novo carro", async ()=>{
      const carsRepository = new CarRepository();
      const createcarService = new CreatecarService(carsRepository);

      const carData = {
          modelo: "testmodelo",
           cor: "prata",
          ano: "2019",
          acessorios: [{
              descricao:"espelho"
          }   
          ],
          quantidadePassageiros:4
      }

      const car = await createcarService.execute(carData)
      
      
      expect(car).toHAVEPropery("_id");
      expect(acessorios.descricao).toHAVEPropery("_id");
      expect(carData.modelo).toBe("testmodelo");

  });
});

describe("Create rental", () =>{
  it("Deve ser possível criar uma nova locadora", async ()=>{
      const rentalRepository = new RentalRepository();
      const createrentalService = new CreaterentalService(rentalRepository);

      const rentalData = {
          nome: "testnome",
          cnpj: "64.646.687/0001-10",
          atividades: "vender",
          endereco: [{
              cep:"96130000",
              logradouro: "testlogradouro",
              complemto: "casa",
              bairro:"z3",
              number:"232",
              localidade:"Pelotas",
              uf: "RS"
          }   
          ],
          isFilial: true || false
      }

      const rental = await createrentalService.execute(carData)
      
      expect(rental).toHAVEPropery("_id");
      expect(rentalData.nome).toBe("testnome");

  });
});

