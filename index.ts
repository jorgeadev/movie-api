import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
import moviesAPI from "./routes/movies";
import mongoose from "mongoose";
const url = process.env.DB as string;
import { logError, handleError } from "./middlewares/errorMiddleware";
import cors from "cors";

const app = express();

const corsConfig = { origin: "http://localhost:3000" };
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
	.connect(url)
	.then(res => {
		console.log("Connected to database! " + res.connections[0].name);
	})
	.catch(err => {
		console.log("Error to connect to database!");
	});

moviesAPI(app);
app.use(logError);
app.use(handleError);

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT} \nhttp://localhost:${PORT}`);
});
