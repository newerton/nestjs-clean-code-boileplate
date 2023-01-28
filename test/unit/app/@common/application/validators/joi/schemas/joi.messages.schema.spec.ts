import joiMessagesSchema from '@app/@common/application/validators/joi/schemas/joi.messages.schema';

describe('MessagesSchema', () => {
  test('Should return {#label} é obrigatório', () => {
    const message = joiMessagesSchema;
    expect(message['any.required']).toBe('{#label} é obrigatório');
  });
});
