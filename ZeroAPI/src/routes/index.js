import express from "express";
import mangaRoutes from "./mangaRoutes.js";
import authorRoutes from "./authorRoutes.js";


const routes = (app) => {
    app.route("/").get((_, res) => res.status(200).send("Node.js course"));
    
    app.use(express.json(), mangaRoutes);
    app.use(express.json(), authorRoutes);

};

export default routes;