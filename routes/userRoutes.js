const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all user routes
router.use(authMiddleware);

router.post("/", userController.createUser); // POST /api/users
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/profile", userController.getProfile);

module.exports = router;