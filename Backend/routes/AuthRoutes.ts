import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/AuthControllers.js";
import protect from "../middlewares/auth.js";
import { verifyUser } from "../controllers/AuthControllers.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", loginUser);
AuthRouter.get("/verify", protect, verifyUser);
AuthRouter.post("/logout", protect, logoutUser);

export default AuthRouter;
