const express = require("express");

// файл з якого експортуються маршрути
const router = express.Router();

const ctrl = require("../../controllers/ctrlHotel");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/hotel");

router.get("/", ctrl.getAll);

// router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addHotel);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateHotel
);

router.delete("/:id", isValidId, ctrl.deleteHotel);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteShema),
  ctrl.updateFavorite
);

module.exports = router;
