import { Request, Response, NextFunction } from "express";

export function logError(err: any, req: Request, res: Response, next: NextFunction) {
	console.log(err);
	next(err);
}

export function handleError(err: any, req: Request, res: Response, next: NextFunction) {
	res.status(err.status || 500);
	res.json({ error: err.message });
}
