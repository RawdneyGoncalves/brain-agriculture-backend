import "jest";
import request from "supertest";
import app from "../app";

describe("Producer Controller Tests", () => {
  let producer_id: any;

  it("should create a new producer", async () => {
    const newProducer = {
      cpfCnpj: "14116763438",
      nomeProdutor: "Rawdney Mendes",
      nomeFazenda: "Fazenda sao jorge",
      cidade: "São Paulo",
      estado: "SP",
      areaTotal: 15000,
      areaAgricultavel: 909,
      areaVegetacao: 200,
      culturasPlantadas: ["Milho", "Trigo"],
    };

    const response = await request(app)
      .post("/producers")
      .send(newProducer)
      .expect(201);

    producer_id = response.body.id;
    expect(response.body).toHaveProperty("id");
    expect(response.body.cpfCnpj).toBe(newProducer.cpfCnpj);
  });

  it("should delete a producer", async () => {
    const response = await request(app)
      .delete("/producers/" + producer_id)
      .expect(200);

    expect(response.body).toHaveProperty("id");
    expect(response.body.cpfCnpj).toBe("14116763438");
  });
});
