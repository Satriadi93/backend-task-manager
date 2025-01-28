import Task from "../model/Task.js";
import { checkLogin } from "../config/auth.js";
import { Op } from "sequelize";

const taskResolver = {
  Query: {
    getTasks: async (_, __, context) => {
      checkLogin(context);
      return await Task.findAll();
    },
    getTaskDetail: async (_, { task_id }, context) => {
      checkLogin(context);
      return await Task.findByPk(task_id);
    },
    tasksByTitle: async (_, { title }, context) => {
      checkLogin(context);
      return await Task.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
      });
    },
  },

  Task: {
    user: async (parent) => {
      return await User.findByPk(parent.user_id);
    },
  },

  Mutation: {
    createTask: async (_, { title, task_duedate, task_status, description, user_id }, context) => {
      checkLogin(context);
      try {
        await Task.create({ title, task_duedate, task_status, description, user_id });
        return { message: "The created task object with a unique identifier" };
      } catch (error) {
        return { message: ` Create data filed : ${error.message}` };
      }
    },

    updateTask: async (_, { task_id, title, task_duedate, task_status, description }, context) => {
      checkLogin(context);
      const task = await Task.findByPk(task_id);
      if (!task) throw new Error("Task not found");
      try {
        await task.update({ title, task_duedate, task_status, description });
        return { message: "updated task " };
      } catch (error) {
        return { message: ` Update data filed : ${error.message}` };
      }
    },

    deleteTask: async (_, { task_id }, context) => {
      checkLogin(context);
      const task = await Task.findByPk(task_id);
      if (!task) throw new Error("Task not found");
      try {
        await task.destroy();
        return { message: " a success message or deleted task object" };
      } catch (error) {
        return { message: ` Delete data filed : ${error.message}` };
      }
    },
  },
};

export default taskResolver;
