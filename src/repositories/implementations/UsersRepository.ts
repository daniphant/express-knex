import { IUsersRepository } from "../IUsersRepository";

import knex from "../../database/";
import { User } from "../../entities/User";

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await knex("users").where("email", email).first();

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await knex("users").where("id", id).first();

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await knex("users").select("*");

    return users;
  }

  async save(user: User): Promise<User> {
    const userId = await knex("users").insert(user).returning("id");

    return {
      ...user,
      id: userId[0],
    };
  }

  async update(fields: Partial<User>, id: string): Promise<User> {
    const [updatedUser] = await knex("users")
      .update(fields)
      .where("id", id)
      .returning("*");

    return updatedUser;
  }

  async delete(id: string): Promise<void> {
    await knex("users").where("id", id).del();
  }
}
