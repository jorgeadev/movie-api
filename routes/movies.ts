import express, { Express } from "express";
import { getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie } from "../controllers/moviesControllers";

export default function moviesAPI(app: Express) {
	/***** CRUD *****/
	const router = express.Router();
	app.use("/api/movies", router);

	/***** READ ALL MOVIES *****/
	router.get("/", getAllMovies);

	/***** READ ONE MOVIE *****/
	router.get("/:movieId", getOneMovie);

	/***** CREATE MOVIE *****/
	router.post("/", createMovie);

	/***** UPDATE MOVIE *****/
	router.put("/:movieId", updateMovie);

	/***** DELETE MOVIE *****/
	router.delete("/:movieId", deleteMovie);
}
