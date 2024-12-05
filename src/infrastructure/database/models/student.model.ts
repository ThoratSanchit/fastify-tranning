import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/index";
import TeacherModel from "./teacher.model"; // Ensure TeacherModel is imported correctly

class StudentModel extends Model {}

StudentModel.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    enrolled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: TeacherModel,
        key: "uuid",
      },
    },
  },
  {
    sequelize,
    tableName: "student",
    timestamps: true,
  }
);

StudentModel.belongsTo(TeacherModel, {
  foreignKey: "teacherId",
  targetKey: "uuid",
});

export default StudentModel;
