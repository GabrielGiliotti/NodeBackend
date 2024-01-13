import mangas from "../models/manga.js";
import { authors } from "../models/author.js";

class MangaController {

    static async getMangas (_, res) {
        try {
            const mangaList = await mangas.find({});
            res.status(200).json(mangaList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to get mangas`})
        }   
    }

    static async getMangaById (req, res) {
        try {
            const id = req.params.id;
            const manga = await mangas.findById(id);
            res.status(200).json(manga);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to get the specified manga`})
        }   
    }

    static async postManga (req, res) {
        const newManga = req.body;
        try {
            const author = await authors.findById(newManga.author);
            const completeManga = { ...newManga, author: { ...author }}
            const createdManga = await mangas.create(completeManga);
            res.status(201).json({ message:"The new manga was regisrered succesfully" , manga: createdManga });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to register new manga`})
        }
    }

    static async updateManga (req, res) {
        const mangaId = req.params.id;
        try {
            const author = await authors.findById(req.body.author);
            await mangas.findByIdAndUpdate(mangaId, { ...req.body , author: author });
            res.status(200).json({ message: "Updated manga" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to update the specified manga`})
        }   
    }

    static async deleteManga (req, res) {
        try {
            const id = req.params.id;
            await mangas.findByIdAndDelete(id);
            res.status(200).json({ message: "Deleted manga" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to delete the specified manga`})
        }   
    }

    static async getMangaByAuthor (req, res) {
        const author = req.query.name;
        try {
            const mangaByAuthor = await mangas.find({'author.name': author});
            res.status(200).json(mangaByAuthor);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to get manga by author`});
        }
    }
}

export default MangaController;
