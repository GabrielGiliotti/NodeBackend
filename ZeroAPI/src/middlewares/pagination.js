import RequestError from "../errors/requestError.js";

async function pagination(req, res, next) {
  try {
    let { limit = 3 , page = 1, sort } = req.query;

    let [sortedBy, order] = ["_id", "-1"];

    if(sort.includes(":"))
      [sortedBy, order] = sort.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if(limit > 0 && page > 0) {
      const paginatedResult = await result.find({})
        .sort({ [sortedBy]: order })
        .skip((page - 1) * limit)
        .limit(limit);
        
      res.status(200).json(paginatedResult);
    }
    else {
      next(new RequestError());
    }
  }
  catch (error) {
    next(error);
  }
}

export default pagination;