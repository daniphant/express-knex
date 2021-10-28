import Router from "express";
import { createUserController } from "./useCases/CreateUser";
import { getUserController } from "./useCases/GetUser";

const router = Router();

// Get all users
router.get("/users", (req, res) => getUserController.handle(req, res));

// Get user by id;
router.get("/users/:id", (req, res) => getUserController.handleOne(req, res));

export { router };
