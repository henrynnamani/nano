import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: String,
  usage: Number,
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});

export const Tag = mongoose.model("Tag", tagSchema);
