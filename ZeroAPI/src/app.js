import express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import handler from "./middlewares/handler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";


const connect = await db();
connect.on("error", (error) => {
  console.error("Connection error", error);
});

connect.once("open", () => {
  console.log("Connection established successfully");
});

const app = express();
routes(app);

app.use(notFoundHandler);

app.get("/", (_ , res) => {
  res.status(200).send("Node.js course");
});

// eslint-disable-next-line no-unused-vars
app.use(handler);

export default app;