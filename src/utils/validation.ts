import Joi from 'joi';
import { validator as validateCpfCnpj } from 'cpf-cnpj-validator';

export const producerValidation = Joi.object({
  cpfCnpj: Joi.string().required().custom((value, helpers) => {
    const result: any = validateCpfCnpj(value);
    if (result && result.error) {
      return helpers.error('any.invalid');
    }
    return value;
  }),
  nome: Joi.string().required(),
  nomeFazenda: Joi.string().required(),
  cidade: Joi.string().required(),
  estado: Joi.string().required(),
  areaTotal: Joi.number().required(),
  areaAgricultavel: Joi.number().required(),
  areaVegetacao: Joi.number().required(),
  culturas: Joi.array().items(Joi.string()).required(),
});

export default producerValidation;
