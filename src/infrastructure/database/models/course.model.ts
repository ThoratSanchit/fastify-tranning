import { DataTypes, Model } from "sequelize";
import sequelize from "../../database/index";

class CourseModel extends Model {}

CourseModel.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "course",
    timestamps: true,
  }
);

export default CourseModel;
