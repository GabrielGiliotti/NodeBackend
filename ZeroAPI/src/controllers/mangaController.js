import mangas from "../models/manga.js";

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
        try {
            const newManga = await mangas.create(req.body);
            res.status(201).json({ message:"The new manga was regisrered succesfully" , manga: newManga });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to register new manga`})
        }
    }

    static async updateManga (req, res) {
        try {
            const id = req.params.id;
            await mangas.findByIdAndUpdate(id, req.body);
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
}

export default MangaController;
