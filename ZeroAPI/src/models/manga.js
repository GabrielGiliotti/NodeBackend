import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const mangaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  publishing_company: { type: String },
  price: { type: Number },
  page_number: { type: Number },
  author: authorSchema
}, { versionKey: false });

const mangas = mongoose.model("mangas", mangaSchema);

export default mangas;