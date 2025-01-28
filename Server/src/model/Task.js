import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Task = sequelize.define("tasks", {
  task_id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  task_duedate: { type: DataTypes.DATE, allowNull: false },
  task_status: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  user_id: { type: DataTypes.STRING, allowNull: false },
});

export default Task;
