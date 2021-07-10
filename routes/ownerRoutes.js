import Router from "express";
import { createOwner, getOwner, updateOwner, deleteOwner } from "../controllers/owner.js";

const ownerRoutes = Router();
ownerRoutes.post("/owners", createOwner);
ownerRoutes.get("/owners", getOwner);
ownerRoutes.post("/owners", updateOwner);
ownerRoutes.delete("/owners", deleteOwner);

export default ownerRoutes;