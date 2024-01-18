import { mangas, authors } from "../models/index.js";
import NotFoundError from "../errors/notFoundError.js";

class MangaController {

  static async getMangas (req, res, next) {
    try {
      const search = mangas.find();
      req.result = search;
      next();
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

  static async getMangaByFilter (req, _, next) {
    try {
      const { title, publishingCompany, name, pageMin, pageMax } = req.query;

      const search = {};

      if(title) search.title = { $regex: title, $options: "i" };
      if(publishingCompany) search.publishing_company = { $regex: publishingCompany, $options: "i" };
      if(name) search["author.name"] = { $regex: name, $options: "i" };
      if(pageMin) search.page_number = { $gte: pageMin };
      if(pageMax) search.page_number = { $lte: pageMax };
    
      const mangaByFilter = mangas.find(search);

      req.result = mangaByFilter;

      next();
    } catch (error) {
      next(error);
    }
  }
}

export default MangaController;
