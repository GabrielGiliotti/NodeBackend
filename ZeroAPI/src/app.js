import express  from "express";

const app = express();
app.use(express.json());

const mangas = [
    {
        id: 1,
        title: "One Piece"
    },
    {
        id: 2,
        title: "Classroom of the Elite"
    }
];

const search = (id) => {
    return mangas.find(m => m.id === Number(id));
}

const getIndex = (id) => {
    return mangas.findIndex(m => m.id === Number(id));
}

app.get("/", (_ , res) => {
    res.status(200).send("Node.js course");
});

app.get("/mangas", (_ , res) => {
    res.status(200).json(mangas);
});

app.get("/mangas/:id", (req , res) => {
    res.status(200).json(search(req.params.id));
});

app.post("/mangas", (req, res) => {
    mangas.push(req.body);
    res.status(201).send("The new manga was regisrered succesfully");
});

app.patch("/mangas/:id", (req, res) => {
    const index = getIndex(req.params.id);
    mangas[index].title = req.body.title;
    res.status(200).json("The new manga was updated succesfully");
});

app.delete("/mangas/:id", (req, res) => {
    const index = getIndex(req.params.id);
    if(index !== -1)
        mangas.splice(index, 1);
    res.status(200).json("The new manga was deleted succesfully");
})

export default app;