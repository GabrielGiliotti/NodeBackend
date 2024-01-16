import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", { 
  validator: (value) => value !== "",
  message: ({ path }) => `The ${path} field does not accept an empty string as a value`
});