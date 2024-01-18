// src/test/producerController.test.ts

import { expect } from "chai";
import request from "supertest";
import app from "../app";

describe("Producer Controller Tests", () => {
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

    expect(response.body).to.have.property("id");
    expect(response.body.nomeProdutor).to.equal(newProducer.nomeProdutor);
  });

  // Add more tests as needed
});
