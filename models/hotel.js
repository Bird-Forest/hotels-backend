const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

// const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;

const hotelSchema = new Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    adress: { type: String, required: true },
    website: { type: String, required: true },
    tel: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    // date: { type: String, match: dateRegexp, required: true },
  },
  { versionKey: false, timestamps: true }
);

hotelSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  imgUrl: Joi.string().required(),
  name: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  adress: Joi.string().required(),
  website: Joi.string().required(),
  tel: Joi.string().required(),
  favorite: Joi.boolean(),
  // date: Joi.string().pattern(dateRegexp).required(),
});

const updateFavoriteShema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavoriteShema,
};

const Hotel = model("hotel", hotelSchema);

module.exports = { Hotel, schemas };
