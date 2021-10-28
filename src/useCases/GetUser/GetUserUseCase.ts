import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  async executeOne(id: string): Promise<User | undefined> {
    return await this.usersRepository.findById(id);
  }
}
