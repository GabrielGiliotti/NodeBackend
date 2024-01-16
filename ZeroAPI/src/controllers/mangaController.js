import { mangas, authors } from "../models/index.js";
import NotFoundError from "../errors/notFoundError.js";

class MangaController {

  static async getMangas (_, res, next) {
    try {
      const mangaList = await mangas.find({});
      res.status(200).json(mangaList);
    } catch (error) {
      next(error);
    }   
  }

  static async getMangaById (req, res, next) {
    try {
      const id = req.params.id;
      const manga = await mangas.findById(id);
      if(manga !== null) 
        res.status(200).json(manga);
      else 
        next(new NotFoundError("Manga Id not found"));
    } catch (error) {
      next(error);
    }   
  }

  static async postManga (req, res, next) {
    const newManga = req.body;
    try {
      const author = await authors.findById(newManga.author);
      const completeManga = { ...newManga, author: { ...author }};
      const createdManga = await mangas.create(completeManga);
      res.status(201).json({ message:"The new manga was regisrered succesfully" , manga: createdManga });
    } catch (error) {
      next(error);
    }
  }

  static async updateManga (req, res, next) {
    const mangaId = req.params.id;
    try {
      const author = await authors.findById(req.body.author);
      const result = await mangas.findByIdAndUpdate(mangaId, { ...req.body , author: author });
      if(result !== null)
        res.status(200).json({ message: "Updated manga" });
      else 
        next(new NotFoundError("Manga Id not found"));

    } catch (error) {
      next(error);
    }   
  }

  static async deleteManga (req, res, next) {
    try {
      const id = req.params.id;
      const result = await mangas.findByIdAndDelete(id);
      if(result !== null)
        res.status(200).json({ message: "Deleted manga" });
      else
        next(new NotFoundError("Manga Id not found"));

    } catch (error) {
      next(error);
    }   
  }

  static async getMangaByAuthor (req, res, next) {
    const author = req.query.name;
    try {
      const mangaByAuthor = await mangas.find({"author.name": author});
      if(mangaByAuthor.length > 0)
        res.status(200).json(mangaByAuthor);
      else
        next(new NotFoundError("Author name not found"));

    } catch (error) {
      next(error);
    }
  }
}

export default MangaController;
