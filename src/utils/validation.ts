import Joi from 'joi';

export const producerValidation = Joi.object({
  cpfCnpj: Joi.string().required(),
  // Restante dos campos e validações
});
