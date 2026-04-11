import Movie, { IMovie } from "../models/MoviesModel";

class MoviesServices {
	async getAllMoviesServices(tags?: string | string[]): Promise<IMovie[]> {
		if (tags) {
			const tagsArray = Array.isArray(tags) ? tags : [tags];
			const query = { tags: { $in: tagsArray } };
			const movies = await Movie.find(query);
			return movies || [];
		} else {
			const movies = await Movie.find();
			return movies || [];
		}
	}

	async getOneMoviesServices(movieId: string): Promise<IMovie | null> {
		const movie = await Movie.findById(movieId);
		return movie;
	}

	async createMovieServices(movie: Partial<IMovie>): Promise<IMovie> {
		const createMovie = await Movie.create(movie);
		return createMovie;
	}

	async updateMovieServices({
		movieId,
		movie,
	}: {
		movieId: string;
		movie: Partial<IMovie>;
	}): Promise<string | undefined> {
		const updatedMovie = await Movie.findByIdAndUpdate(movieId, movie, { new: true });
		return updatedMovie?.id;
	}

	async deleteMovieServices(movieId: string): Promise<string | { message: string }> {
		try {
			const deleteMovie = await Movie.findByIdAndDelete(movieId);
			return deleteMovie?.id || { message: "Movie can't found!" };
		} catch (error) {
			console.log(error);
			return { message: "Movie can't found!" };
		}
	}
}

export default MoviesServices;
