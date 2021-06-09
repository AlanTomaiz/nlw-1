import { Knex } from 'knex';

export async function seed(knex: Knex) {
  return knex('items').insert([
    { title: 'Lâmpadas', image: 'uploads/lampadas.svg' },
    { title: 'Pilhas e Baterias', image: 'uploads/baterias.svg' },
    { title: 'Papéis e Papelão', image: 'uploads/papeis-papelao.svg' },
    { title: 'Resíduos Eletrônicos', image: 'uploads/eletronicos.svg' },
    { title: 'Resíduos Orgânicos', image: 'uploads/organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'uploads/oleo.svg' },
  ]);
}