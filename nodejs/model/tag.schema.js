import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: String,
  usage: {
    type: Number,
    default: 0,
  },
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
});

export const Tag = mongoose.model("Tag", tagSchema);


// set - unique value

/**
 * #celo, #celo
 */