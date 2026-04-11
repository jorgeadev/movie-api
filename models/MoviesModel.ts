import { Schema, model, Document } from "mongoose";

export interface IMovie extends Document {
	title: string;
	year: string;
	cover: string;
	duration: string;
	contentRating: string;
	source: string;
	tags: string[];
}

const moviesSchema = new Schema<IMovie>(
	{
		title: { type: String, required: true },
		year: { type: String, required: true },
		cover: {
			type: String,
			default: "http://dummyimage.com/152x222.png/ff4444/ffffff",
			match: [/^(http|https):\/\/[^ "]+$/, "Invalid URL format"],
		},
		duration: { type: String },
		contentRating: { type: String },
		source: {
			type: String,
			default: "https://example.com/default-movie-source.mp4",
			match: [/^(http|https):\/\/[^ "]+$/, "Invalid URL format"],
		},
		tags: [{ type: String }],
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export default model<IMovie>("Movie", moviesSchema);
