"use strict";

import { Response, Request } from "express";

import * as db from "../db/db";


export const getValue = (req: Request, res: Response) => {
	console.log("req params", req.params);
	console.log("yay I am here");
	const key = req.params.key;
	const post = db.getValue(key);
	if (post) res.json(post);
	else res.sendStatus(404);
};

export const setValue = (req: Request, res: Response) => {
	console.log("req body", req.body);
	db.setValue(req.body.key, JSON.stringify(req.body.value));
		res.json(200);
};
