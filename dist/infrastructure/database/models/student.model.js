"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("../../database/index"));
const teacher_model_1 = __importDefault(require("./teacher.model"));
class StudentModel extends sequelize_1.Model {
}
StudentModel.init({
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    enrolled: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    teacherId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "teacher",
            key: "uuid",
        },
    },
}, {
    sequelize: index_1.default,
    tableName: "student",
    timestamps: true,
});
StudentModel.belongsTo(teacher_model_1.default, {
    foreignKey: "teacherId",
    as: "teacher",
});
exports.default = StudentModel;
