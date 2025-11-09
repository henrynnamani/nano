import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export const Tag = mongoose.model("Tag", TagSchema);
