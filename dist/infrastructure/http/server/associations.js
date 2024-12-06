"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAssociations = void 0;
const course_model_1 = __importDefault(require("@infrastructure/database/models/course.model"));
const student_model_1 = __importDefault(require("@infrastructure/database/models/student.model"));
const defineAssociations = () => {
    course_model_1.default.hasMany(student_model_1.default, { foreignKey: 'courseId', as: 'student' });
    student_model_1.default.belongsTo(course_model_1.default, { foreignKey: 'courseId', as: 'course' });
};
exports.defineAssociations = defineAssociations;
