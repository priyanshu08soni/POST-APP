const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddlewares");
const {
  createUser,
  loginUserCtrl,
  updatedUser
} = require("../controller/userCtrl");
const router = express.Router();
//authroute->userctrl->usermodel tocheck user
router.post("/login", loginUserCtrl);
router.post("/register", createUser);
router.put("/edit-user", authMiddleware, updatedUser);

module.exports = router;
