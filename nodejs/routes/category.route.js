import { Router } from "express";
import {
  createCategory,
  getAllCategory,
  getCategoryPosts,
} from "../controller/category.controller.js";

const router = Router();

router.get("", getAllCategory);

router.post("", createCategory);

router.get("/:id/posts", getCategoryPosts);

export default router;
