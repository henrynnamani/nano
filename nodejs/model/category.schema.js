import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
});

categorySchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "categoryId",
});

export const Category = mongoose.model("Category", categorySchema);
