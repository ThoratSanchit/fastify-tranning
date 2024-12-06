"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAssociations = void 0;
const teacher_model_1 = __importDefault(require("@infrastructure/database/models/teacher.model"));
const student_model_1 = __importDefault(require("@infrastructure/database/models/student.model"));
const defineAssociations = () => {
    teacher_model_1.default.hasMany(student_model_1.default, { foreignKey: 'teacherId', as: 'student' });
    student_model_1.default.belongsTo(teacher_model_1.default, { foreignKey: 'teacherId', as: 'teacher' });
};
exports.defineAssociations = defineAssociations;
