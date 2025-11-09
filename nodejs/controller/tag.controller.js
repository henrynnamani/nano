import { Tag } from "../model/tag.schema.js";

const createTag = async (req, res) => {
  const body = req.body;

  try {
    const tag = new Tag(body);

    await tag.save();
    res
      .json({
        data: tag,
      })
      .status(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export { createTag };
