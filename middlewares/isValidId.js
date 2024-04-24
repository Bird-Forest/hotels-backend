const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");
// console.log(HttpError);

const isValidId = (req, res, next) => {
  const { id } = req.params;
  // console.log("isValidId", id);
  if (!isValidObjectId) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};
module.exports = isValidId;
