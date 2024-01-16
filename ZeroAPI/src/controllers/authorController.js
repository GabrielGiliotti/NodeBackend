import NotFoundError from "../errors/notFoundError.js";
import { authors }from "../models/author.js";

class AuthorController {

  static async getAuthors (_, res, next) {
    try {
      const authorList = await authors.find({});
      res.status(200).json(authorList);
    } catch (error) {
      next(error);
    }   
  }

  static async getAuthorById (req, res, next) {
    try {
      const id = req.params.id;
      const author = await authors.findById(id);
      if(author !== null)
        res.status(200).json(author);
      else
        next(new NotFoundError("Author Id not found"));
    } 
    catch (error) {
      next(error);
    }   
  }

  static async postAuthor (req, res, next) {
    try {
      const newAuthor = await authors.create(req.body);
      res.status(201).json({ message:"The new author was regisrered succesfully" , author: newAuthor });
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor (req, res, next) {
    try {
      const id = req.params.id;
      const result = await authors.findByIdAndUpdate(id, req.body);
      if(result !== null)
        res.status(200).json({ message: "Updated author" });
      else
        next(new NotFoundError("Author Id not found"));

    } catch (error) {
      next(error);
    }   
  }

  static async deleteAuthor (req, res, next) {
    try {
      const id = req.params.id;
      const result = await authors.findByIdAndDelete(id);
      if(result !== null)
        res.status(200).json({ message: "Deleted author" });
      else 
        next(new NotFoundError("Author Id not found"));

    } catch (error) {
      next(error);
    }   
  }
}

export default AuthorController;
