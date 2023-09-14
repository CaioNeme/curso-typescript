import { NextFunction, Request, Response } from "express";

export default function validateSchema(schema: any) {
  //no middleware de validação de schema
  // o schema é qual tipo
  return (req:Request, res:Response, next:NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      throw { type: "unprocessableEntity", message: "Dados inválidos" };
    }
    next();
  };
}