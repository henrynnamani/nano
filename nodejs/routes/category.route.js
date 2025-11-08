import { Router } from "express";
import {
  createCategory,
  getCategoryPosts,
} from "../controller/category.controller.js";

const router = Router();

router.post("", createCategory);

router.get("/:id", getCategoryPosts);

export default router;
