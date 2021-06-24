import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
  password: string
}

class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
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
    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });
    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
