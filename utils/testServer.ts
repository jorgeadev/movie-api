import express, { Express } from "express";
import supertest from "supertest";

function testServer(route: (app: Express) => void) {
	const app = express();
	route(app);
	return supertest(app);
}

export default testServer;
