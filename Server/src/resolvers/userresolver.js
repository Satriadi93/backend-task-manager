import { checkLogin } from "../config/auth.js";
import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const tokens = new Set();

const userResolver = {
  Query: {
    getUsers: async (_, __, context) => {
      checkLogin(context);
      return await User.findAll();
    },
  },

  User: {
    tasks: async (parent) => {
      return await Task.findAll({ where: { user_id: parent.user_id } });
    },
  },

  Mutation: {
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
        await User.create({ username, password: hashedPassword });
        return { message: "account has been created" };
      } catch (error) {
        return `account failed: ${error.message}`;
      }
    },

    login: async (_, { username, password }) => {
      const user = await User.findOne({ where: { username } });
      if (!user) throw new Error("User not found");

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) throw new Error("Invalid password");

      const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
      return token;
    },

    logout: (_, __, context) => {
      const token = context.token;
      if (token) {
        tokens.add(token);
        return { message: "Logout successful" };
      }
      throw new Error("you are not logged in yet");
    },
  },
};

export { tokens };
export default userResolver;
