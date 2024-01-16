import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const mangaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  publishing_company: { 
    type: String,
    enum: { 
      values: ["Panini", "JBC", "NewPOP", "Pipoca & Nanquim"],
      message: "The publisher {VALUE} is not a valid value."
    }
  },
  price: { 
    type: Number,
    min: 2
  },
  page_number: { 
    type: Number,
    min: 10,
    max: 40
  },
  author: authorSchema
}, { versionKey: false });

const mangas = mongoose.model("mangas", mangaSchema);

export default mangas;