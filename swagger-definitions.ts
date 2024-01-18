import { OpenAPI } from "openapi-types";

const swaggerDefinition: OpenAPI.Document = {
  openapi: "3.0.0",
  info: {
    title: "Brain Agriculture API",
    version: "1.0.0",
    description: "API para gerenciar produtores agrícolas",
  },
  paths: {
    "/producers": {
      post: {
        summary: "Cria um produtor",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cpfCnpj: { type: "string", example: "14116763438" },
                  nomeProdutor: { type: "string", example: "RAwdney MEndes" },
                  nomeFazenda: { type: "string", example: "Fazenda teste" },
                  cidade: { type: "string", example: "Pernambuco" },
                  estado: { type: "string", example: "PE" },
                  areaTotal: { type: "number", example: 1000 },
                  areaAgricultavel: { type: "number", example: 800 },
                  areaVegetacao: { type: "number", example: 200 },
                  culturasPlantadas: {
                    type: "array",
                    items: { type: "string" },
                    example: ["Milho", "algodao"],
                  },
                },
                required: [
                  "cpfCnpj",
                  "nomeProdutor",
                  "nomeFazenda",
                  "cidade",
                  "estado",
                  "areaTotal",
                  "areaAgricultavel",
                  "areaVegetacao",
                  "culturasPlantadas",
                ],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Produtor criado com sucesso",
          },
          400: {
            description: "Requisição inválida",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      get: {
        summary: "Obtém a lista de produtores",
        responses: {
          200: {
            description: "Lista de produtores obtida com sucesso",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/producers/{id}": {
      get: {
        summary: "Obtém um produtor pelo ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do produtor",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Produtor obtido com sucesso",
          },
          404: {
            description: "Produtor não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      put: {
        summary: "Atualiza um produtor pelo ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do produtor",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  cpfCnpj: { type: "string", example: "14116763438" },
                  nomeProdutor: {
                    type: "string",
                    example: "rawdney goncalves mendes",
                  },
                  nomeFazenda: {
                    type: "string",
                    example: "Fazenda grain-agriculture",
                  },
                  cidade: { type: "string", example: "Sao Paulo" },
                  estado: { type: "string", example: "SP" },
                  areaTotal: { type: "number", example: 1000 },
                  areaAgricultavel: { type: "number", example: 800 },
                  areaVegetacao: { type: "number", example: 200 },
                  culturasPlantadas: {
                    type: "array",
                    items: { type: "string" },
                    example: ["soja", "azeitona"],
                  },
                },
                required: [
                  "cpfCnpj",
                  "nomeProdutor",
                  "nomeFazenda",
                  "cidade",
                  "estado",
                  "areaTotal",
                  "areaAgricultavel",
                  "areaVegetacao",
                  "culturasPlantadas",
                ],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Produtor atualizado com sucesso",
          },
          400: {
            description: "Requisição inválida",
          },
          404: {
            description: "Produtor não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
      delete: {
        summary: "Exclui um produtor pelo ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do produtor",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Produtor excluído com sucesso",
          },
          404: {
            description: "Produtor não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      ProducerInput: {
        type: "object",
        properties: {
          cpfCnpj: {
            type: "string",
            description: "CPF ou CNPJ do produtor",
          },
          nomeProdutor: {
            type: "string",
            description: "Nome do produtor",
          },
          nomeFazenda: {
            type: "string",
            description: "Nome da fazenda",
          },
          cidade: {
            type: "string",
            description: "Cidade do produtor",
          },
          estado: {
            type: "string",
            description: "Estado do produtor",
          },
          areaTotal: {
            type: "number",
            description: "Área total do produtor",
          },
          areaAgricultavel: {
            type: "number",
            description: "Área agricultável do produtor",
          },
          areaVegetacao: {
            type: "number",
            description: "Área de vegetação do produtor",
          },
          culturasPlantadas: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Culturas plantadas pelo produtor",
          },
        },
        required: [
          "cpfCnpj",
          "nomeProdutor",
          "nomeFazenda",
          "cidade",
          "estado",
          "areaTotal",
          "areaAgricultavel",
          "areaVegetacao",
          "culturasPlantadas",
        ],
      },
    },
  },
};

export default swaggerDefinition;
