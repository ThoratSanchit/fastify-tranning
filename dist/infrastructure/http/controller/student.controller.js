"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentByteacherId = exports.getStudentById = exports.getAllStudents = exports.createStudent = void 0;
const student_service_1 = require("@core/services/student.service");
const createStudent = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const student = yield (0, student_service_1.StudentService)(studentRepository).createStudent(request.body);
        void reply.status(201).send(student);
    });
};
exports.createStudent = createStudent;
const getAllStudents = (studentService) => {
    return (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { page = 1, limit = 10 } = request.query;
        try {
            const students = yield studentService.getAllStudents(page, limit);
            return reply.code(200).send(students);
        }
        catch (error) {
            return reply.code(500).send({ error: "Internal Server Error" });
        }
    });
};
exports.getAllStudents = getAllStudents;
const getStudentById = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const student = yield (0, student_service_1.StudentService)(studentRepository).getStudent(id);
            if (!student) {
                return reply.status(404).send({ message: "Student not found" });
            }
            return reply.status(200).send(student);
        }
        catch (error) {
            return reply.status(500).send({ message: "Internal Server Error" });
        }
    });
};
exports.getStudentById = getStudentById;
const getStudentByteacherId = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { teacherId } = request.params;
            const students = yield (0, student_service_1.StudentService)(studentRepository).getStudentByTeacher(teacherId);
            if (!students || students.length === 0) {
                return reply.status(404).send({ message: "No students found for this teacher" });
            }
            return reply.status(200).send(students);
        }
        catch (error) {
            return reply.status(500).send({ message: "Internal Server Error", error });
        }
    });
};
exports.getStudentByteacherId = getStudentByteacherId;
const updateStudent = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { uuid } = request.params;
            const updates = request.body;
            const updatedStudent = yield (0, student_service_1.StudentService)(studentRepository).updateStudent(uuid, updates);
            if (!updatedStudent) {
                return reply
                    .status(404)
                    .send({ message: "Student not found or could not be updated" });
            }
            return reply.status(200).send(updatedStudent);
        }
        catch (error) {
            return reply.status(500).send({ message: "Internal Server Error" });
        }
    });
};
exports.updateStudent = updateStudent;
const deleteStudent = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { uuid } = request.params;
            const deletedStudent = yield (0, student_service_1.StudentService)(studentRepository).deleteStudent(uuid);
            if (!deletedStudent) {
                return reply
                    .status(404)
                    .send({ message: "Student not found or could not be deleted" });
            }
            return reply.status(200).send({
                message: "Student deleted successfully",
                student: deletedStudent,
            });
        }
        catch (error) {
            return reply.status(500).send({ message: "Internal Server Error" });
        }
    });
};
exports.deleteStudent = deleteStudent;
