var validate = require('./helpers/validate');

const schema = {};

function run(params, options) {
  return new Promise((resolve, reject) => {
    let errors = validate(params, schema);
    if (errors) return reject(errors);

    resolve(null);
  });
}

module.exports = {
  schema: schema,
  run: run,
};
