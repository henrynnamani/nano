import { Router } from "express";
import { createTag } from "../controller/tag.controller.js";

const router = Router();

router.post("", createTag);

export default router;
