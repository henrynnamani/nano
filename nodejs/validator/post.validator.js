import { z } from "zod";

export const postValidator = z.object({
  title: z.string().min(1, "Title is required"),
  status: z.boolean(),
  category: z.string().min(1, "Category ID is required"),
  tags: z.array(z.string()).optional(),
});
