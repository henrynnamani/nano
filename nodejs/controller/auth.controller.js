import { User } from "../model/user.schema.js";
import { generateToken, verifyToken } from "../util/jwt.js";
import * as bcrypt from "bcryptjs";

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const exist = await userExist(email);

    if (!exist) {
      throw new Error("User does not exist");
    }

    const verifyPassword = await bcrypt.compare(password, exist.password);

    if (!verifyPassword) {
      throw new Error("Invalid Credentials");
    }

    const token = generateToken(exist);

    res.status(200).json({
      data: {
        exist,
        token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const exist = await userExist(email);

    if (exist) {
      throw new Error("User with email already exist");
    }

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      password: hashedPassword,
      email,
    });

    const token = generateToken(user);

    await user.save();

    res.status(201).json({
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const userExist = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    console.error(err);
  }
};

export { signIn, signUp };
