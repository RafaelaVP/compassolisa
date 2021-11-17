/* eslint-disable consistent-return */
/* eslint-disable no-throw-literal */
const validateType = require('../../helper/getAll');

class Repository {
  constructor(schema) {
    this._schema = schema;
  }

  async findByParams(search) {
    const { limit = 100, offset = 0, ...query } = search;
    const data = validateType(query);
    return this._schema.paginate(data, {
      limit,
      offset
    });
  }

  async create(payload) {
    try {
      return await this._schema.create(payload);
    } catch (error) {
      if (error.code === 11000) {
        throw {
          description: 'Conflict',
          name: `${Object.keys(error.keyValue)[0]} ${Object.values(error.keyValue)} already in use`
        };
      }
    }
  }

  async update(_id, payload) {
    return this._schema.findByIdAndUpdate(_id, payload, { new: true });
  }

  async delete(_id) {
    return this._schema.findByIdAndRemove(_id);
  }

  async getById(_id) {
    return this._schema.findById(_id);
  }
}

module.exports = Repository;
