import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  nationality: { type: String },
  age: { 
    type: Number,
    validate: {
      validator: (value) => {
        return value >= 20 && value <= 100;
      },
      message: "The age ({VALUE} years) is not a valid value."
    } 
  },
}, { versionKey: false });

const authors = mongoose.model("authors", authorSchema);

export { authors, authorSchema };