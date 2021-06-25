import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token for
  const authToken = request.headers.authorization;

  // Validar se o token esta preenchido de
  if (!authToken) {
    throw new AppError("Token missing", 401);
  }

  // Verifica se token é valido
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "808d68e042c8d617297c49420d61b327"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }

  // Recuperar informação de usuario
}
