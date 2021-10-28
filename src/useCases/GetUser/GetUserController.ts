import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  async handle(_: Request, res: Response): Promise<Response> {
    try {
      const users = await this.getUserUseCase.execute();
      return res.status(200).send({
        error: null,
        payload: users,
      });
    } catch (err) {
      return res.status(400).send({
        error: err?.message ?? "Unknown error",
        payload: "",
      });
    }
  }

  async handleOne(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.getUserUseCase.executeOne(req.params.id);
      return res.status(200).send({
        error: null,
        payload: user,
      });
    } catch (err) {
      return res.status(400).send({
        error: err?.message ?? "Unknown error",
        payload: "",
      });
    }
  }
}
