import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('points', table => {
    table.increments('point_id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.integer('latitude').notNullable();
    table.integer('longitude').notNullable();
    table.integer('cep').notNullable();
    table.string('address').notNullable();
    table.string('number').notNullable();
    table.string('district').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('complement');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('points');
}