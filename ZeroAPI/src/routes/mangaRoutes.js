import express from "express";
import MangaController from "../controllers/mangaController.js";

const routes = express.Router();

routes.get("/mangas", MangaController.getMangas);
routes.get("/mangas/:id", MangaController.getMangaById);
routes.post("/mangas", MangaController.postManga);
routes.put("/mangas/:id", MangaController.updateManga);
routes.delete("/mangas/:id", MangaController.deleteManga);

export default routes;
