import Router from "express";
import { createPet, getPet, getPetWithOwner, getPetWithOwnerRGAndCPF, updatePet, deletePet } from "../controllers/pet.js";
import verifyJWT from "../helpers/jwtVerifier.js";

const petRoutes = Router();
petRoutes.post("/pets", verifyJWT, createPet);
petRoutes.get("/pets/:id", verifyJWT, getPet);
petRoutes.get("/pets/:id/owner", verifyJWT, getPetWithOwner);
petRoutes.get("/pets/:id/owner-full", verifyJWT, getPetWithOwnerRGAndCPF);
petRoutes.patch("/pets/:id", verifyJWT, updatePet);
petRoutes.delete("/pets/:id", verifyJWT, deletePet);

export default petRoutes;