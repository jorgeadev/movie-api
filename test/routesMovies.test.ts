import assert from "assert";
import proxyquire from "proxyquire";
import { movies, servicesMoviesMocks } from "../utils/mocks/moviesMocks";
import testServer from "../utils/testServer";

describe("routes - movies", () => {
	// using proxyquire to mock the controllers module
	const route =
		proxyquire("../routes/movies", {
			"../controllers/moviesControllers": {
				getAllMovies: async (req: any, res: any) => {
					res.status(200).json({
						data: movies,
						message: "All movies loaded successfully!",
					});
				},
			},
		}).default ||
		proxyquire("../routes/movies", {
			"../controllers/moviesControllers": {
				getAllMovies: async (req: any, res: any) => {
					res.status(200).json({
						data: movies,
						message: "All movies loaded successfully!",
					});
				},
			},
		});

	const request = testServer(route);

	describe("GET /api/movies", () => {
		it("should respond with status 200", done => {
			request.get("/api/movies").expect(200, done);
		});

		it("should respond with the list of movies", done => {
			request.get("/api/movies").end((err, res) => {
				assert.deepStrictEqual(res.body, {
					data: movies,
					message: "All movies loaded successfully!",
				});
				done();
			});
		});
	});
});
