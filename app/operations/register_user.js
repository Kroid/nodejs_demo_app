let BaseOperation = require('./base_operation');

class RegisterUser extends BaseOperation {
  constructor() {
    super()
  }

  run(attrs) {
    return new Promise((resolve, reject) => {
      resolve(attrs);
    });
  }
}

module.exports = RegisterUser;
