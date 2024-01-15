import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  nationality: { type: String },
  age: { type: Number },
}, { versionKey: false });

const authors = mongoose.model("authors", authorSchema);

export { authors, authorSchema };