import { Post } from "../model/post.schema.js";

const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);
    res.json(post).status(200);
  } catch (err) {
    console.error(err); // logging
    res.sendStatus(500);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts).status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createPost = async (req, res) => {
  const body = req.body;

  try {
    const post = await new Post(body);

    post.save(); // persist in the database

    res.json(post).status(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    let post = await checkPostExist(id);

    if (!post) {
      res.status(404).json({
        message: "Post does not exist",
      });
    }

    const newPost = await Post.findByIdAndUpdate(id, body, { new: true });

    res.json(newPost).status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;

  let post = await checkPostExist(id);

  if (!post) {
    res.status(404).json({
      message: "Post does not exist",
    });
  }

  try {
    await Post.findByIdAndDelete(id);
    res.sendStatus(204); // No content
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const checkPostExist = async (id) => {
  try {
    const post = await Post.findById(id);

    return post;
  } catch (err) {
    console.error(err);
  }
};

export { deletePost, createPost, updatePost, getPost, getPosts };
