import { Category } from "../model/category.schema.js";

const createCategory = async (req, res) => {
  const body = req.body;

  try {
    const category = new Category(body);

    await category.save();

    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getCategoryPosts = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await Category.findById(id);

    await category.populate("posts").exec();

    res.json(category.posts).status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export { createCategory, getCategoryPosts };
