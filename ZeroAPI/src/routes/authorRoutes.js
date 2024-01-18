import express from "express";
import AuthorController from "../controllers/authorController.js";
import pagination from "../middlewares/pagination.js";

const authorRoutes = express.Router();

authorRoutes.get("/authors", AuthorController.getAuthors, pagination);
authorRoutes.get("/authors/:id", AuthorController.getAuthorById);
authorRoutes.post("/authors", AuthorController.postAuthor);
authorRoutes.put("/authors/:id", AuthorController.updateAuthor);
authorRoutes.delete("/authors/:id", AuthorController.deleteAuthor);

export default authorRoutes;