import express from "express";
import MangaController from "../controllers/mangaController.js";

const mangaRoutes = express.Router();

mangaRoutes.get("/mangas", MangaController.getMangas);
mangaRoutes.get("/mangas/:id", MangaController.getMangaById);
mangaRoutes.post("/mangas", MangaController.postManga);
mangaRoutes.put("/mangas/:id", MangaController.updateManga);
mangaRoutes.delete("/mangas/:id", MangaController.deleteManga);

export default mangaRoutes;
