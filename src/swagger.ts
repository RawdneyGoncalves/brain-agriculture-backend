import swaggerJsdoc from "swagger-jsdoc";

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

const specs = swaggerJsdoc(options);

export { specs };
