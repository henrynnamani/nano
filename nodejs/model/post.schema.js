import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  title: String,
  status: Boolean,
});

export const Post = mongoose.model("Post", postSchema);

// One to Many relationship
