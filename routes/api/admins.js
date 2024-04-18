const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/ctrlAdmins");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/admin");

router.post("/signup", validateBody(schemas.upSchema), ctrl.signUp);
// router.get("/verify/:verificationCode", ctrl.verifyUserEmail);
// router.post(
//   "/verify",
//   validateBody(schemas.emailSchema),
//   ctrl.resendVerifyEmail
// );
router.post("/signin", validateBody(schemas.inSchema), ctrl.signIn);
// router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.signOut);

// upload.fields([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 2}])
// upload.array("cover", 8)
// router.patch(
//   "/avatar",
//   authenticate,
//   upload.single("avatar"),
//   ctrl.updateAvatar
// );

module.exports = router;
