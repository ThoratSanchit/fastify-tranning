import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/index";
import StudentModel from "./student.model";

class TeacherModel extends Model {}

TeacherModel.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "teacher",
    timestamps: true,
  }
);


export default TeacherModel;
