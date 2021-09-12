import Router from "express";
import userRoutes from "./userRoutes.js";
import petRoutes from "./petRoutes.js";
import ownerRoutes from "./ownerRoutes.js";

const routes = Router();
routes.use("/", userRoutes);
routes.use("/", petRoutes);
routes.use("/", ownerRoutes);

export default routes;