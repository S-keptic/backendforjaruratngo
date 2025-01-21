const express = require("express");
const { verifyToken, verifyRole } = require("../middlewares/roleMiddleware");
const resourceController = require("../controllers/resourceController");

const router = express.Router();

router.post("/create", verifyToken, verifyRole(["Admin"]), resourceController.createResource);

router.get("/all", verifyToken, verifyRole(["Admin", "User"]), resourceController.getAllResources);

router.get("/byId/:id", verifyToken, verifyRole(["Admin", "User"]), resourceController.getResourceById);

router.put("/update/:id", verifyToken, verifyRole(["Admin"]), resourceController.updateResource);

router.delete("/delete/:id", verifyToken, verifyRole(["Admin"]), resourceController.deleteResource);

module.exports = router;
