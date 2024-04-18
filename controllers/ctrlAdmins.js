const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const path = require("path");
// const fs = require("fs/promises");
// const gravatar = require("gravatar");

const { SEKRET_KEY } = process.env;
const { Admin } = require("../models/admin");
const { HttpError, ctrlWrapper } = require("../helpers");

// const avatarDir = path.join(__dirname, "../", "public", "avatars");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await Admin.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  //   const avatarURL = gravatar.url(email);

  const newUser = await Admin.create({
    ...req.body,
    password: hashPassword,
    // avatarURL,
  });

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  if (!user.verify) {
    throw HttpError(401, "Email invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SEKRET_KEY, { expiresIn: "23h" });
  await Admin.findByIdAndUpdate(user._id, { token });
  res.json({ token });
};

// const getCurrent = async (req, res) => {
//   const { email, name } = req.user;
//   res.json({ email, name });
// };

const signOut = async (req, res) => {
  const { _id } = req.user;
  await Admin.findByIdAndUpdate(_id, { token: "" });
  res.json({ message: "Logaout success" });
};

// const updateAvatar = async (req, res) => {
//   const { _id } = req.user;
//   const { path: tempUpload, originalname } = req.file;
//   const filename = `${_id}_${originalname}`;
//   const resultUpload = path.join(avatarDir, filename);

//   await fs.rename(tempUpload, resultUpload);

//   const avatarURL = path.join("avatars", filename);
//   await Admin.findByIdAndUpdate(_id, { avatarURL });

//   res.json({
//     avatarURL,
//   });
// };

module.exports = {
  signIn: ctrlWrapper(signIn),
  signUp: ctrlWrapper(signUp),
  // getCurrent: ctrlWrapper(getCurrent),
  signOut: ctrlWrapper(signOut),
  //   updateAvatar: ctrlWrapper(updateAvatar),
};
