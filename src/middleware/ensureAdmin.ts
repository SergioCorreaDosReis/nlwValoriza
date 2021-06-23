import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true;

  if (!admin) {
    throw new AppError(
      "User does not have permission to execute this operation!",
      401
    );
  }

  return next();
}
