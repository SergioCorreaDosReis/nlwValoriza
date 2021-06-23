import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await userRepository.findOne({ email });
    
    // Verifica se e-mail esta preenchido
    if (!email) {
      throw new AppError("Email incorrect",404);
    }
    // consulta de usuario existe
    if (userAlreadyExists) {
      throw new AppError("User already exists",400);
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });
    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
