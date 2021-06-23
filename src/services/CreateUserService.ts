import { getCustomRepository } from "typeorm";
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
      throw new Error("Email incorrect");
    }
    // consulta de usuario existe
    if (userAlreadyExists) {
      throw new Error("User already exists");
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