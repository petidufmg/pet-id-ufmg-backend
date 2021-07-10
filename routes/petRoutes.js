import Router from "express";
import { createPet, getPet, updatePet, deletePet } from "../controllers/pet.js";

const petRoutes = Router();
petRoutes.post("/pets", createPet);
petRoutes.get("/pets/:id", getPet);
petRoutes.post("/pets/:id", updatePet);
petRoutes.delete("/pets/:id", deletePet);

export default petRoutes;