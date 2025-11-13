import { Router } from "express";
import { createTag, getPosts } from "../controller/tag.controller.js";

const router = Router();

router.post("", createTag);

router.get("/:id/posts", getPosts);

export default router;
