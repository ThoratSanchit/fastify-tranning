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
    teacher_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher_class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edjucation: {
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
// TeacherModel.hasMany(StudentModel, { foreignKey: 'teacherId' }); // One teacher can have many students

export default TeacherModel;
