import Router from "express";
import { createOwner, getOwner, updateOwner, deleteOwner } from "../controllers/owner.js";

const ownerRoutes = Router();
ownerRoutes.post("/owners", createOwner);
ownerRoutes.get("/owners/:id", getOwner);
ownerRoutes.post("/owners/:id", updateOwner);
ownerRoutes.delete("/owners/:id", deleteOwner);

export default ownerRoutes;