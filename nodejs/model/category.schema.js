import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
});

categorySchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "category",
});

categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });

export const Category = mongoose.model("Category", categorySchema);

// buildInPublic, MuslimMuslim, TechCrunch, The Verge, Rema