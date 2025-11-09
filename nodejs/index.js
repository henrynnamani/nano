import express from "express";
import postRouter from "./routes/post.route.js";
import categoryRouter from "./routes/category.route.js";
import tagRouter from "./routes/tag.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authGuard from "./middleware/auth.middleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/posts", authGuard, postRouter);
app.use("/categories", categoryRouter);
app.use("/tags", tagRouter);
app.use("/auths", authRouter);

app.listen("3000", () => {
  console.log(`Server running @port 3000`);
});
