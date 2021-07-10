import Router from "express";
import { createPet, getPet, updatePet, deletePet } from "../controllers/pet.js";

const petRoutes = Router();
petRoutes.post("/pets", createPet);
petRoutes.get("/pets", getPet);
petRoutes.post("/pets", updatePet);
petRoutes.delete("/pets", deletePet);

export default petRoutes;