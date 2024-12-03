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
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getAllStudents = exports.createStudent = void 0;
const student_service_1 = require("@core/services/student.service");
const createStudent = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const student = yield (0, student_service_1.StudentService)(studentRepository)
            .createStudent(request.body);
        void reply.status(201).send(student);
    });
};
exports.createStudent = createStudent;
const getAllStudents = (studentRepository) => function (req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        const students = yield (0, student_service_1.StudentService)(studentRepository).getAllStudents();
        void rep.status(200).send(students);
    });
};
exports.getAllStudents = getAllStudents;
const getStudentById = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get the student ID from the route params
            const { id } = request.params;
            // Fetch the student from the repository
            const student = yield (0, student_service_1.StudentService)(studentRepository).getStudent(id);
            if (!student) {
                // If no student is found, return a 404 error
                return reply.status(404).send({ message: 'Student not found' });
            }
            // If the student is found, return the student data
            return reply.status(200).send(student);
        }
        catch (error) {
            // Handle unexpected errors
            return reply.status(500).send({ message: 'Internal Server Error' });
        }
    });
};
exports.getStudentById = getStudentById;
const updateStudent = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const updates = request.body;
            const updatedStudent = yield (0, student_service_1.StudentService)(studentRepository).updateStudent(id, updates);
            if (!updatedStudent) {
                return reply.status(404).send({ message: 'Student not found or could not be updated' });
            }
            return reply.status(200).send(updatedStudent);
        }
        catch (error) {
            return reply.status(500).send({ message: 'Internal Server Error' });
        }
    });
};
exports.updateStudent = updateStudent;
const deleteStudent = (studentRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const deletedStudent = yield (0, student_service_1.StudentService)(studentRepository).deleteStudent(id);
            if (!deletedStudent) {
                return reply.status(404).send({ message: 'Student not found or could not be deleted' });
            }
            return reply.status(200).send({ message: 'Student deleted successfully', student: deletedStudent });
        }
        catch (error) {
            return reply.status(500).send({ message: 'Internal Server Error' });
        }
    });
};
exports.deleteStudent = deleteStudent;
