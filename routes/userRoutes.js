import Router from "express";
import { getUser, updateUser, deleteUser, authenticateWithGoogle, checkTokenIsValid } from "../controllers/user.js";
import verifyJWT from "../helpers/jwtVerifier.js";

const userRoutes = Router();
userRoutes.get("/users/:id", verifyJWT, getUser);
userRoutes.post("/users/:id", verifyJWT, updateUser);
userRoutes.delete("/users/:id", verifyJWT, deleteUser);
userRoutes.post("/users/auth/google", authenticateWithGoogle);
userRoutes.get("/users/isValid", verifyJWT, checkTokenIsValid);

export default userRoutes;