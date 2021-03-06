import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  update(fields: Partial<User>, id: string): Promise<User | undefined>;
  delete(id: string): Promise<void>;
}
