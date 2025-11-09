import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  title: String,
  status: Boolean,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});

export const Post = mongoose.model("Post", postSchema);

// {
//   "title": "Build a workout tracker",
//   "status": false,
//   "category": "690ddeeba8486c743025b4e6"
// }

/**
 * tagId
 * 
 * 6910d023601c83b9da76f087
 * 6910d04003ee39b8a4b9b60f
 * 6910d048abed7d4b46661d80
 */