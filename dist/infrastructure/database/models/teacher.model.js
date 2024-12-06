"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../../database/index"));
class TeacherModel extends sequelize_1.Model {
}
TeacherModel.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    teacher_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    teacher_class: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    edjucation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: index_1.default,
    tableName: "teacher",
    timestamps: true,
});
// TeacherModel.hasMany(StudentModel, { foreignKey: 'teacherId' }); // One teacher can have many students
exports.default = TeacherModel;
