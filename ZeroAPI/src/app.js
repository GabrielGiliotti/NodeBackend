import express  from "express";
import db from "./config/dbConnect.js";
import mangas from "./models/manga.js";

const connect = await db();
connect.on("error", (error) => {
    console.error("Connection error", error);
});

connect.once("open", () => {
    console.log("Connection established successfully");
});

const app = express();
app.use(express.json());

const search = (id) => {
    return mangas.find(m => m.id === Number(id));
}

const getIndex = (id) => {
    return mangas.findIndex(m => m.id === Number(id));
}

app.get("/", (_ , res) => {
    res.status(200).send("Node.js course");
});

app.get("/mangas", async (_ , res) => {
    const mangaList = await mangas.find({});
    res.status(200).json(mangaList);
});

// app.get("/mangas/:id", (req , res) => {
//     res.status(200).json(search(req.params.id));
// });

// app.post("/mangas", (req, res) => {
//     mangas.push(req.body);
//     res.status(201).send("The new manga was regisrered succesfully");
// });

// app.patch("/mangas/:id", (req, res) => {
//     const index = getIndex(req.params.id);
//     mangas[index].title = req.body.title;
//     res.status(200).json("The new manga was updated succesfully");
// });

// app.delete("/mangas/:id", (req, res) => {
//     const index = getIndex(req.params.id);
//     if(index !== -1)
//         mangas.splice(index, 1);
//     res.status(200).json("The new manga was deleted succesfully");
// })

export default app;