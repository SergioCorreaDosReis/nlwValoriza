import { ListUsersServices } from "../services/ListUsersServices";
import { Request, Response } from "express";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListUsersServices();
    const users = await listUsersService.execute();

    return response.status(200).json(users);
  }
}

export { ListUsersController };
