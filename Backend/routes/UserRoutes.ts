import express from "express";
import {
  getUserThumbnails,
  getThumbnailbyId,
} from "../controllers/UserController.js";

const UserRouter = express.Router();

UserRouter.get("/thumbnails", getUserThumbnails);

UserRouter.get("/thumbnails/:id", getThumbnailbyId);

export default UserRouter;
