import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";

import flash from "express-flash";
import path from "path";
import * as apiController from "./controllers/api";


// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

// app.get("/", homeController.index);


/**
 * API examples routes.
 */
app.get("/api/:key", apiController.getValue);


app.post("/api/", apiController.setValue);

export default app;
