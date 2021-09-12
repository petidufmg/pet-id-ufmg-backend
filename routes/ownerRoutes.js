import Router from "express";
import { createOwner, getOwner, updateOwner, deleteOwner } from "../controllers/owner.js";
import verifyJWT from "../helpers/jwtVerifier.js";

const ownerRoutes = Router();
ownerRoutes.post("/owners", verifyJWT, createOwner);
ownerRoutes.get("/owners/:id", verifyJWT, getOwner);
ownerRoutes.post("/owners/:id", verifyJWT, updateOwner);
ownerRoutes.delete("/owners/:id", verifyJWT, deleteOwner);

export default ownerRoutes;