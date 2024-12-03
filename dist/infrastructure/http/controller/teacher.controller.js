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
exports.deleteTeacher = exports.updateTeacher = exports.getTeacherById = exports.getAllTeachers = exports.createTeacher = void 0;
const teacher_service_1 = require("@core/services/teacher.service");
const createTeacher = (teacherRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teacher = yield (0, teacher_service_1.TeacherService)(teacherRepository).createTeacher(request.body);
            reply.status(201).send(teacher);
        }
        catch (error) {
            reply.status(500).send({ message: "Internal Server Error", error });
        }
    });
};
exports.createTeacher = createTeacher;
const getAllTeachers = (teacherRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const teachers = yield (0, teacher_service_1.TeacherService)(teacherRepository).getAllTeachers();
            reply.status(200).send(teachers);
        }
        catch (error) {
            reply.status(500).send({ message: "Internal Server Error", error });
        }
    });
};
exports.getAllTeachers = getAllTeachers;
const getTeacherById = (teacherRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const teacher = yield (0, teacher_service_1.TeacherService)(teacherRepository).getTeacher(id);
            if (!teacher) {
                reply.status(404).send({ message: "Teacher not found" });
            }
            else {
                reply.status(200).send(teacher);
            }
        }
        catch (error) {
            reply.status(500).send({ message: "Internal Server Error", error });
        }
    });
};
exports.getTeacherById = getTeacherById;
const updateTeacher = (teacherRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const updates = request.body;
            const updatedTeacher = yield (0, teacher_service_1.TeacherService)(teacherRepository).updateTeacher(id, updates);
            if (!updatedTeacher) {
                reply.status(404).send({ message: "Teacher not found or could not be updated" });
            }
            else {
                reply.status(200).send(updatedTeacher);
            }
        }
        catch (error) {
            reply.status(500).send({ message: "Internal Server Error", error });
        }
    });
};
exports.updateTeacher = updateTeacher;
const deleteTeacher = (teacherRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const deletedTeacher = yield (0, teacher_service_1.TeacherService)(teacherRepository).deleteTeacher(id);
            if (!deletedTeacher) {
                reply.status(404).send({ message: "Teacher not found or could not be deleted" });
            }
            else {
                reply.status(200).send({ message: "Teacher deleted successfully", teacher: deletedTeacher });
            }
        }
        catch (error) {
            reply.status(500).send({ message: "Internal Server Error", error });
        }
    });
};
exports.deleteTeacher = deleteTeacher;
