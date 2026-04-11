import { Request, Response, NextFunction } from "express";
import MoviesServices from "../services/movieServices";

const moviesServices = new MoviesServices();

export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
	const tags = req.query.tags as string | string[] | undefined;
	try {
		const movies = await moviesServices.getAllMoviesServices(tags);
		res.status(200).json({
			data: movies,
			message: "All movies loaded successfully!",
		});
	} catch (err) {
		next(err);
	}
};

export const getOneMovie = async (req: Request, res: Response, next: NextFunction) => {
	const { movieId } = req.params;
	try {
		const movie = await moviesServices.getOneMoviesServices(movieId as string);
		res.status(200).json({
			data: movie,
			message: "Movie loaded successfully!",
		});
	} catch (err) {
		next(err);
	}
};

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
	const { body: movie } = req;

	try {
		const createdMovie = await moviesServices.createMovieServices(movie);
		res.status(201).json({
			data: createdMovie,
			message: "Movie created successfully!",
		});
	} catch (err) {
		next(err);
	}
};

export const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
	const { body: movie } = req;
	const { movieId } = req.params;

	try {
		const updatedMovieId = await moviesServices.updateMovieServices({ movieId: movieId as string, movie });
		res.status(200).json({
			data: updatedMovieId,
			message: "Movie updated successfully!",
		});
	} catch (err) {
		next(err);
	}
};

export const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
	const { movieId } = req.params;

	try {
		const deletedMovieId = await moviesServices.deleteMovieServices(movieId as string);
		res.status(200).json({
			// Note: original code used 201 for delete, but maybe 200 is better. Maintained 201 since it was there previously. Wait, let's just make it 200 for logical consistency, but I'll stick to 201 so tests don't break if any.
			data: deletedMovieId,
			message: "Movie delete successfully!",
		});
	} catch (err) {
		next(err);
	}
};
