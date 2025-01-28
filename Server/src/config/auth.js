import jwt from "jsonwebtoken";
import { tokens } from "../resolvers/userresolver.js";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const contextMiddleware = async ({ req }) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split("Bearer ")[1];

  if (token && !tokens.has(token)) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return { userId: decoded.userId, token };
    } catch (err) {
      console.error("Invalid or expired token");
    }
  }
  return {};
};

const checkLogin = (context) => {
  if (!context.userId) throw new Error("you have to login");
};

export { contextMiddleware, checkLogin };
