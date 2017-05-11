const pg = require('pg');

var config = require('./config/database.json').development;
// console.log(config);

const pool = new pg.Pool(config);

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

var query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};

var connect = function (callback) {
  return pool.connect(callback);
};

query('SELECT * FROM users', (err, res) => {
  if(err) {
    return console.error('error running query', err);
  }

  console.log(res.rows[0]);
})
