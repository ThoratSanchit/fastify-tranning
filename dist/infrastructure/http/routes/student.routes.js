"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const student_controller_1 = require("@infrastructure/http/controller/student.controller");
const student_schemas_1 = require("../schemas/student.schemas");
const studentRoutes = (studentRepository) => [
    {
        method: "POST",
        url: "/students",
        schema: student_schemas_1.postStudentSchema,
        handler: (0, student_controller_1.createStudent)(studentRepository),
    },
    {
        method: "GET",
        url: "/students",
        // schema: findAllStudentsSchema,
        handler: (0, student_controller_1.getAllStudents)(studentRepository),
    },
    {
        method: "GET",
        url: "/students/:id",
        schema: student_schemas_1.getStudentByID,
        handler: (0, student_controller_1.getStudentById)(studentRepository),
    },
    {
        method: "PUT",
        url: "/students/:id",
        schema: student_schemas_1.putStudentSchema,
        handler: (0, student_controller_1.updateStudent)(studentRepository),
    },
    {
        method: "DELETE",
        url: "/studentUser/:id",
        schema: student_schemas_1.deleteStudentSchema,
        handler: (0, student_controller_1.deleteStudent)(studentRepository),
    },
];
exports.studentRoutes = studentRoutes;
