import Router from "express";
import { createUserController } from "./useCases/Users/CreateUser";
import { deleteUserController } from "./useCases/Users/DeleteUser";
import { getUserController } from "./useCases/Users/GetUser";
import { updateUserController } from "./useCases/Users/UpdateUser";

const router = Router();

// Get all users
router.get("/users", (req, res) => getUserController.handle(req, res));

// Get user by id;
router.get("/users/:id", (req, res) => getUserController.handleOne(req, res));

// Create a new user
router.post("/users", (req, res) => createUserController.handle(req, res));

// Update user by id
router.put("/users/:id", (req, res) => updateUserController.handle(req, res));

// Delete user by id
router.delete("/users/:id", (req, res) =>
  deleteUserController.handle(req, res),
);

export { router };
