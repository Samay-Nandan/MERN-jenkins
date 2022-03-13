import express from "express";
const router = express.Router();
import { getAll, getById, add, update } from "../controllers/todos.js";

router.get("/", getAll);
router.get("/:id", getById);
router.post("/add", add);
router.post("/update/:id", update);

export default router;