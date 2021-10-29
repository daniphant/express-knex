import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.deleteUserUseCase.execute(request.params.id);

      return response.status(200).send({
        error: null,
        message: "User deleted successfully",
      });
    } catch (err) {
      return response.status(400).send({
        error: err.message || "Unexpected error.",
        payload: null,
      });
    }
  }
}
