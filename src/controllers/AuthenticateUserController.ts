import { Request, Response } from "express";
import { AuthenticatedUseService } from "../services/AuthenticatedUseService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticatedUseService = new AuthenticatedUseService();

    const token = await authenticatedUseService.execute({ 
      email, 
      password 
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
