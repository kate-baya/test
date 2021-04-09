
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE test(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT,
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE test`
  return knex.raw(dropQuery)
};
