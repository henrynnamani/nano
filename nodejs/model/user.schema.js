import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export const User = mongoose.model("User", UserSchema);
