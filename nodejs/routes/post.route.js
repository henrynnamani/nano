import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/post.controller.js";

const router = Router();

router.get("", getPosts);

router.get("/:id", getPost);

router.post("", createPost);

router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;
