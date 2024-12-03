"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_routes_1 = require("@infrastructure/http/routes/student.routes");
const teacher_routes_1 = require("@infrastructure/http/routes/teacher.routes");
exports.default = (studentRepository, teacherRepository) => [
    ...(0, student_routes_1.studentRoutes)(studentRepository),
    ...(0, teacher_routes_1.teacherRoutes)(teacherRepository),
];
