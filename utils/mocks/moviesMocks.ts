export const movies = [
	{
		id: "ca309ed7-1aeb-4201-b2a4-2386dba194f0",
		title: "Crime at Porta Romana",
		year: "1999",
		cover: "http://dummyimage.com/180x158.png/5fa2dd/ffffff",
		duration: "237",
		contentRating: "C",
		source: "https://businessinsider.com/habitasse...",
		tags: ["Adventure|Animation|Children|Comedy", "Drama"],
	},
];

export const filterMoviesMocks = (tag: string) => movies.filter(movie => movie.tags.includes(tag));

export class servicesMoviesMocks {
	async getAllMoviesServices() {
		return Promise.resolve(movies);
	}
	async createMovieServices() {
		return Promise.resolve(movies[0]);
	}
	async getOneMoviesServices() {
		return Promise.resolve(movies[0]);
	}
	async updateMovieServices() {
		return Promise.resolve(movies[0].id);
	}
	async deleteMovieServices() {
		return Promise.resolve(movies[0].id);
	}
}
