import { UsersRepository } from "../../../repositories/implementations/UsersRepository";

export class DeleteUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(id: string): Promise<void> {
    return await this.usersRepository.delete(id);
  }
}
