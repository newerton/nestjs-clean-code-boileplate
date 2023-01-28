import * as JoiBase from 'joi';

import { CreateSchema } from '@app/@common/application/validators/joi/schemas/joi.create-schema.interface';
import joiMessagesSchema from '@app/@common/application/validators/joi/schemas/joi.messages.schema';

const Joi = JoiBase;

export class CreateExampleSchemaValidation implements CreateSchema {
  createSchema(): JoiBase.ObjectSchema {
    return Joi.object({
      title: Joi.string()
        .required()
        .label('Título')
        .messages(joiMessagesSchema),
      description: Joi.string()
        .required()
        .label('Descrição')
        .messages(joiMessagesSchema),
      status: Joi.string()
        .required()
        .label('Status')
        .messages(joiMessagesSchema),
    });
  }
}
