import express from "express";
import {
    addToLikedMovies,
    getLikedMovies,
    removeFromLikedMovies,
} from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/add", addToLikedMovies);
userRouter.put("/remove", removeFromLikedMovies);
userRouter.get("/liked/:email", getLikedMovies);


export default userRouter;
