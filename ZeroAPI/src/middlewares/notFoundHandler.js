import NotFoundError from "../errors/notFoundError.js";

function notFoundHandler (req, res, next) {
  const error404 = new NotFoundError();
  next(error404);
}

export default notFoundHandler;