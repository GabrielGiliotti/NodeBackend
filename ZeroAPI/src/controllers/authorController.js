import { authors }from "../models/author.js";

class AuthorController {

    static async getAuthors (_, res) {
        try {
            const authorList = await authors.find({});
            res.status(200).json(authorList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to get authors`})
        }   
    }

    static async getAuthorById (req, res) {
        try {
            const id = req.params.id;
            const author = await authors.findById(id);
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to get the specified author`})
        }   
    }

    static async postAuthor (req, res) {
        try {
            const newAuthor = await authors.create(req.body);
            res.status(201).json({ message:"The new author was regisrered succesfully" , author: newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to register new author`})
        }
    }

    static async updateAuthor (req, res) {
        try {
            const id = req.params.id;
            await authors.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Updated author" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to update the specified author`})
        }   
    }

    static async deleteAuthor (req, res) {
        try {
            const id = req.params.id;
            await authors.findByIdAndDelete(id);
            res.status(200).json({ message: "Deleted author" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to delete the specified author`})
        }   
    }
}

export default AuthorController;
