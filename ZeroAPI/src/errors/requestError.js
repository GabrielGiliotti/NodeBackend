import BaseError from "./baseError.js";

class RequestError extends BaseError {
  constructor(message = "One or more data provided is incorrect") {
    super(message, 400);
  }
}

export default RequestError;