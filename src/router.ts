import Router from "express";
import { createUserController } from "./useCases/Users/CreateUser";
import { deleteUserController } from "./useCases/Users/DeleteUser";
import { getUserController } from "./useCases/Users/GetUser";

const router = Router();

// Get all users
router.get("/users", (req, res) => getUserController.handle(req, res));

// Get user by id;
router.get("/users/:id", (req, res) => getUserController.handleOne(req, res));

// Create a new user
router.post("/users", (req, res) => createUserController.handle(req, res));

export { router };
