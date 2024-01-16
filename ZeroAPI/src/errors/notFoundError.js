import BaseError from "./baseError.js";

class NotFoundError extends BaseError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

export default NotFoundError;