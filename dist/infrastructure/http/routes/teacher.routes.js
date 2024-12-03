"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherRoutes = void 0;
const teacher_controller_1 = require("@infrastructure/http/controller/teacher.controller");
const teacher_schemas_1 = require("../schemas/teacher.schemas");
const teacherRoutes = (teacherRepository) => [
    {
        method: "POST",
        url: "/teachers",
        schema: teacher_schemas_1.postTeacherSchema,
        handler: (0, teacher_controller_1.createTeacher)(teacherRepository),
    },
    {
        method: "GET",
        url: "/teachers",
        schema: teacher_schemas_1.getAllTeachersQuery,
        handler: (0, teacher_controller_1.getAllTeachers)(teacherRepository),
    },
    {
        method: "GET",
        url: "/teachers/:uuid",
        schema: teacher_schemas_1.getTeacherByIdSchema,
        handler: (0, teacher_controller_1.getTeacherById)(teacherRepository),
    },
    {
        method: "PUT",
        url: "/teachers/:uuid",
        schema: teacher_schemas_1.putTeacherSchema,
        handler: (0, teacher_controller_1.updateTeacher)(teacherRepository),
    },
    {
        method: "DELETE",
        url: "/teachers/:id",
        schema: teacher_schemas_1.deleteTeacherSchema,
        handler: (0, teacher_controller_1.deleteTeacher)(teacherRepository),
    },
];
exports.teacherRoutes = teacherRoutes;
