import { validator as validateCpfCnpj } from "cpf-cnpj-validator";
import Joi from "joi";

export const producerValidation = Joi.object({
  cpfCnpj: Joi.string()
    .required()
    .custom((value, helpers) => {
      const result: any = validateCpfCnpj(value);
      if (result && result.error) {
        return helpers.error("any.invalid");
      }
      return value;
    }),
  nomeProdutor: Joi.string().required(),
  nomeFazenda: Joi.string().required(),
  cidade: Joi.string().required(),
  estado: Joi.string().required(),
  areaTotal: Joi.number().required(),
  areaAgricultavel: Joi.number().required(),
  areaVegetacao: Joi.number().required(),
  culturasPlantadas: Joi.array().items(Joi.string()).required(),
});

export default producerValidation;
