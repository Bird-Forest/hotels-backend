// const Joi = require("joi");
// експортуємо функції з "../../models/books" для використання в запитах
// const books = require("../models/books");
const { Hotel } = require("../models/hotel");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  // const { _id: owner } = req.user;

  const result = await Hotel.find();
  // const { page = 1, limit = 3 } = req.query;
  // const skip = (page - 1) * limit;
  // const result = await Hotel.find({ owner }, "-createdAt -updatedAt", {
  //   skip,
  //   limit,
  // }).populate("owner", "name email");
  res.json(result);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  // console.log("getById", id);
  const result = await Hotel.findById(id);
  // console.log(result);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  // console.log(res);
  res.json(result);
};

const addHotel = async (req, res, next) => {
  // console.log(req.user);
  // const { _id: owner } = req.user;
  const result = await Hotel.create(req.body);
  // console.log(result);
  res.status(201).json(result);
};

const updateHotel = async (req, res, next) => {
  // const { error } = addSchema.validate(req.body);
  // console.log(error);
  // if (error) {
  //   throw HttpError(400, error.message);
  // }
  const { id } = req.params;
  const result = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  console.log(result);
  res.json(result);
};

const deleteHotel = async (req, res, next) => {
  const { id } = req.params;
  const result = await Hotel.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete success" });
};

const updateFavorite = async (req, res, next) => {
  // const { error } = addSchema.validate(req.body);
  // console.log(error);
  // if (error) {
  //   throw HttpError(400, error.message);
  // }
  const { id } = req.params;
  const result = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addHotel: ctrlWrapper(addHotel),
  updateHotel: ctrlWrapper(updateHotel),
  deleteHotel: ctrlWrapper(deleteHotel),
  updateFavorite: ctrlWrapper(updateFavorite),
};
