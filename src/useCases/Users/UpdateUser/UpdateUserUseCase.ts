import { User } from "../../../entities/User";
import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { UpdateUserDto } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(dto: UpdateUserDto, id: string): Promise<User> {
    return await this.usersRepository.update(dto, id);
  }
}
