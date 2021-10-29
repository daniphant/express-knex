import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.updateUserUseCase.execute(
        request.body,
        request.params.id,
      );

      return response.status(200).send({
        error: null,
        payload: user,
      });
    } catch (err) {
      return response.status(400).send({
        error: err.message || "Unexpected error.",
        payload: null,
      });
    }
  }
}
