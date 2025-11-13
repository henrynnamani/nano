import { Tag } from "../model/tag.schema.js";
import { tagValidator } from "../validator/tag.validator.js";

const createTag = async (req, res) => {
  const body = req.body;
  try {
    const validatedTag = tagValidator.parse(body);

    const tag = new Tag(validatedTag);

    await tag.save();

    res.json(tag).status(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getPosts = async (req, res) => {
  const id = req.params.id;

  try {
    const tag = await Tag.findById(id).populate("posts");

    res.json(tag.posts).status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteTag = async (req, res) => {};

export { createTag, deleteTag, getPosts };
