"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherRoutes = void 0;
const teacher_controller_1 = require("@infrastructure/http/controller/teacher.controller");
const teacherRoutes = (teacherRepository) => [
    {
        method: "POST",
        url: "/teachers",
        handler: (0, teacher_controller_1.createTeacher)(teacherRepository),
    },
    {
        method: "GET",
        url: "/teachers",
        handler: (0, teacher_controller_1.getAllTeachers)(teacherRepository),
    },
    {
        method: "GET",
        url: "/teachers/:id",
        handler: (0, teacher_controller_1.getTeacherById)(teacherRepository),
    },
    {
        method: "PUT",
        url: "/teachers/:id",
        handler: (0, teacher_controller_1.updateTeacher)(teacherRepository),
    },
    {
        method: "DELETE",
        url: "/teachers/:id",
        handler: (0, teacher_controller_1.deleteTeacher)(teacherRepository),
    },
];
exports.teacherRoutes = teacherRoutes;
