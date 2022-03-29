const { payload } = require('@hapi/hapi/lib/validation');
const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayload: (payload) => {
    const validdationResult = UserPayloadSchema.validate(payload);

    if (validdationResult.error) {
      throw new InvariantError(validdationResult.error.message);
    }
  },
};

module.exports = UsersValidator;
