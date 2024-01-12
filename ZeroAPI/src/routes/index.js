import express from "express";
import mangas from "./mangaRoutes.js";

const routes = (app) => {
    app.route("/").get((_, res) => res.status(200).send("Node.js course"));
    
    app.use(express.json(), mangas);
};

export default routes;
