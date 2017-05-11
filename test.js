let BaseOperation = require('./app/operations/base_operation');

(new BaseOperation())
  .run()
  .then((resp) => {
    console.log(`response: ${resp}`)
  })
  .catch((err) => {
    console.log(`error: ${err}`)
  })



// let RegisterUser = require('./app/operations/register_user');
//
// (new RegisterUser())
//   .run({
//     email: 'demo@gmail.com',
//     password: '123123',
//   })
//   .then((resp) => {
//     console.log(`response: ${JSON.stringify(resp)}`)
//   })
//   .catch((err) => {
//     console.log(`error: ${JSON.stringify(err)}`)
//   })
