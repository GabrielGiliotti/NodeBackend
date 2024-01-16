import mongoose from "mongoose";
import BaseError from "../errors/baseError.js";
import RequestError from "../errors/requestError.js";
import ValidationError from "../errors/validationError.js";
import NotFoundError from "../errors/notFoundError.js";

// eslint-disable-next-line no-unused-vars
function handler(error, req, res, next) {
  if(error instanceof mongoose.Error.CastError) {
    new RequestError().sendResponse(res);
  }
  else if(error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendResponse(res);
  }
  else if(error instanceof NotFoundError) {
    error.sendResponse(res);
  }
  else {
    new BaseError().sendResponse(res);
  }
}
    
export default handler;