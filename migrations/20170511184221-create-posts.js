'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, cb) {
  db.createTable('posts', {
    id: { type: 'int', primaryKey: true },
    user_id: { type: 'int' },
    title: { type: 'string' },
    text: { type: 'string' },
  }, cb);
};

exports.down = function(db, cb) {
  db.dropTable('posts', cb);
};

exports._meta = {
  "version": 1
};
