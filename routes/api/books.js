const express = require("express");

// файл з якого експортуються маршрути
const router = express.Router();

const ctrl = require("../../controllers/books");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/book");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteShema),
  ctrl.updateFavorite
);

module.exports = router;

// app.get("/api/books", (req, res) => {
//   res.json(books);
// });
// app.get("/api/books/:id", (req, res) => {
//   res.json(books[0]);
// });
// app.post("/api/books", (req, res) => {
//   res.json(books[0]);
// });
// app.put("/api/books/:id", (req, res) => {
//   res.json(books[0]);
// });
// app.delete("/api/books/:id", (req, res) => {
//   res.json(books[0]);
// });
