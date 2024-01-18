import swaggerUi from "swagger-ui-express";
import swaggerDefinitions from "./swagger-definitions";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Brain Agriculture API",
      version: "1.0.0",
      description:
        "Documentação da API para operações com produtores na area de agricultura",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerDefinitions;

export { specs, swaggerUi };
