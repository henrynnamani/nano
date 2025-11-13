import z from "zod";

export const tagValidator = z.object({
  name: z.string().min(1, "Name is required"),
});
