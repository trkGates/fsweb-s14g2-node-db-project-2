/**
 *
 * @param {import("knex".Knex)} knex
 * @returns {Promise<void>}
 */

exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.string("vin").notNullable();
    table.string("make").notNullable();
    table.string("model").notNullable();
    table.integer("mileage").notNullable();
    table.string("title").notNullable();
    table.string("transmission").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
