import { cnpj, cpf } from "cpf-cnpj-validator";
import Joi from "joi";

const CPF_LENGTH = 11;

var customMessages = {
  "string.empty": "O campo {{#label}} não pode estar vazio",
  "any.required": "O campo {{#label}} é obrigatório",
  "any.custom": "CPF ou CNPJ inválido",
};

export const producerValidation = Joi.object({
  cpfCnpj: Joi.string()
    .required()
    .custom((value, helpers) => {
      const cleanedValue = value.replace(/\D/g, "");
      const isValidCpfOrCnpj =
        cleanedValue.length === CPF_LENGTH
          ? cpf.isValid(cleanedValue)
          : cnpj.isValid(cleanedValue);

      return isValidCpfOrCnpj ? cleanedValue : helpers.error("any.custom");
    }),
  nomeProdutor: Joi.string().required(),
  nomeFazenda: Joi.string().required(),
  cidade: Joi.string().required(),
  estado: Joi.string().required(),
  areaTotal: Joi.number().required(),
  areaAgricultavel: Joi.number().required(),
  areaVegetacao: Joi.number().required(),
  culturasPlantadas: Joi.array().items(Joi.string()).required(),
}).messages(customMessages);

export default producerValidation;
