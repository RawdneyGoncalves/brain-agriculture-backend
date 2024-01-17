import { cnpj, cpf } from "cpf-cnpj-validator";
import Joi, { LanguageMessages } from "joi";
const customMessages: LanguageMessages = {
  "any.custom": "Invalid CPF or CNPJ",
};

const CPF_LENGTH = 11;

export const producerValidation = Joi.object({
  cpfCnpj: Joi.string()
    .required()
    .custom((value, helpers) => {
      const cleanedValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
      const isValidCpfOrCnpj = (() =>
        cleanedValue.length === CPF_LENGTH
          ? cpf.isValid(cleanedValue)
          : cnpj.isValid(cleanedValue))();

      if (!isValidCpfOrCnpj) {
        return helpers.message({ "any.custom": customMessages["any.custom"] });
      }

      return cleanedValue; // Retorna o valor limpo, se a validação passar
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
