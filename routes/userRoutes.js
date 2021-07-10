import Router from "express";
import { createUser, getUser, updateUser, deleteUser } from "../controllers/user.js";

const userRoutes = Router();
userRoutes.post("/users", createUser);
userRoutes.get("/users/:id", getUser);
userRoutes.post("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

export default userRoutes;