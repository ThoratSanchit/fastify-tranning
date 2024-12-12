"use strict";
//student.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const student_controller_1 = require("@infrastructure/http/controller/student.controller");
const student_schemas_1 = require("../schemas/student.schemas");
const verifyJwt_1 = __importDefault(require("@infrastructure/http/Auth/verifyJwt"));
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
        // schema: getAllStudentsSchema,
        preHandler: verifyJwt_1.default,
        handler: (0, student_controller_1.getAllStudents)(studentRepository),
    },
    {
        method: "GET",
        url: "/students-teacher/:teacherId",
        preHandler: verifyJwt_1.default,
        handler: (0, student_controller_1.getStudentByteacherId)(studentRepository),
    },
    {
        method: "GET",
        url: "/students/:uuid",
        schema: student_schemas_1.getStudentByID,
        preHandler: verifyJwt_1.default,
        handler: (0, student_controller_1.getStudentById)(studentRepository),
    },
    {
        method: "PUT",
        url: "/students/:uuid",
        schema: student_schemas_1.putStudentSchema,
        preHandler: verifyJwt_1.default,
        handler: (0, student_controller_1.updateStudent)(studentRepository),
    },
    {
        method: "DELETE",
        url: "/studentUser/:uuid",
        schema: student_schemas_1.deleteStudentSchema,
        preHandler: verifyJwt_1.default,
        handler: (0, student_controller_1.deleteStudent)(studentRepository),
    },
];
exports.studentRoutes = studentRoutes;
