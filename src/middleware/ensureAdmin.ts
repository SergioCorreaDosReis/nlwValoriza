import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;
  

  const usersRepositories = getCustomRepository(UsersRepositories);

  const {admin} = await usersRepositories.findOne(user_id);

  if (!admin) {
    throw new AppError(
      "User Unauthorize to execute this action!",
      401
    );
  }

  return next();
}
