import { Tag } from "../model/tag.schema.js";

const createTag = async (req, res) => {
  const { name } = req.body;
  try {
    const tag = new Tag({ name });

    await tag.save();

    res.json(tag).status(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteTag = async (req, res) => {};

export { createTag, deleteTag };
