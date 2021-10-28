import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    },
    {
      name: "Emil Haapala",
      email: "emil.haapala@example.com",
      password: "dingdong",
    },
    {
      name: "Mademoiselle Margherita",
      email: "margherita.martinez@example.com",
      password: "baylor",
    },
  ]);
}
