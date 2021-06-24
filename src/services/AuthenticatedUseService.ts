import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";
import { AppError } from "../errors/AppError";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticatedUseService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verifica se o e-mail informado esta correto
    const user = await usersRepositories.findOne({email});
   
    if (!user) {
      // throw new AppError("Email/Password incorrect", 401);
      throw new AppError("Email/Password incorrect", 401);
    }

    // Verifica se a senha esta correta com a informada pelo usuario
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email/Password incorrect", 401);
    }

    // Gera Token
    const token = sign({email: user.email},"808d68e042c8d617297c49420d61b327",{
        subject:user.id,
        expiresIn: "1d"
    })
    return token
  }
}

export { AuthenticatedUseService };
