import Router from "express";
import { createUser, getUser, updateUser, deleteUser } from "../controllers/user.js";

const userRoutes = Router();
userRoutes.post("/users", createUser);
userRoutes.get("/users", getUser);
userRoutes.post("/users", updateUser);
userRoutes.delete("/users", deleteUser);

export default userRoutes;