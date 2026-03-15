const express = require("express");
const {
  userRegister,
  userLogin,
  logoutUser,
  getMeController,
} = require("../controllers/userControllers");
const { authUser } = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/register", userRegister);
authRouter.post("/login", userLogin);
authRouter.get("/logout", logoutUser);
authRouter.get("/get-me", authUser, getMeController);

module.exports = authRouter;
