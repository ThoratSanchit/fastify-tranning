import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/index";
import TeacherModel from "./teacher.model";


class StudentModel extends Model {
  teacher: any;
  course: any;
  length: any;
}

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
    }
  },
  {
    sequelize,
    tableName: "student",
    timestamps: true,
  }
);





export default StudentModel;
