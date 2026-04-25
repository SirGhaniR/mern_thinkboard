import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET || "dev_secret",
      {
        expiresIn: "1h",
      },
    );

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select("+password");

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!user.password === hashedPassword) {
      const error = new Error("Incorrect password");
      error.statusCode = 400;
      throw error;
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: email,
      },
      process.env.JWT_SECRET || "dev_secret",
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};
