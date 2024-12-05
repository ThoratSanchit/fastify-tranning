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
exports.deleteCourse = exports.updateCourse = exports.getCourseById = exports.getAllCourses = exports.createCourse = void 0;
const course_service_1 = require("@core/services/course.service");
// Create a course
const createCourse = (courseRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const course = yield (0, course_service_1.CourseService)(courseRepository).createCourse(request.body);
            void reply.status(201).send(course);
        }
        catch (error) {
            reply
                .status(500)
                .send({ error: "Failed to create course", details: error });
        }
    });
};
exports.createCourse = createCourse;
// Get all courses
const getAllCourses = (courseRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page = 1, limit = 10 } = request.query;
        try {
            const courses = yield (0, course_service_1.CourseService)(courseRepository).getAllCourses(page, limit);
            return reply.status(200).send(courses);
        }
        catch (error) {
            return reply
                .status(500)
                .send({ error: "Internal Server Error", details: error });
        }
    });
};
exports.getAllCourses = getAllCourses;
// Get a course by ID
const getCourseById = (courseRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const course = yield (0, course_service_1.CourseService)(courseRepository).getCourse(id);
            if (!course) {
                return reply.status(404).send({ message: "Course not found" });
            }
            return reply.status(200).send(course);
        }
        catch (error) {
            return reply
                .status(500)
                .send({ error: "Internal Server Error", details: error });
        }
    });
};
exports.getCourseById = getCourseById;
// Update a course
const updateCourse = (courseRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { uuid } = request.params;
            const updates = request.body;
            const updatedCourse = yield (0, course_service_1.CourseService)(courseRepository).updateCourse(uuid, updates);
            if (!updatedCourse) {
                return reply
                    .status(404)
                    .send({ message: "Course not found or could not be updated" });
            }
            return reply.status(200).send(updatedCourse);
        }
        catch (error) {
            return reply
                .status(500)
                .send({ error: "Internal Server Error", details: error });
        }
    });
};
exports.updateCourse = updateCourse;
// Delete a course
const deleteCourse = (courseRepository) => function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { uuid } = request.params;
            const deletedCourse = yield (0, course_service_1.CourseService)(courseRepository).deleteCourse(uuid);
            if (!deletedCourse) {
                return reply
                    .status(404)
                    .send({ message: "Course not found or could not be deleted" });
            }
            return reply.status(200).send({
                message: "Course deleted successfully",
                course: deletedCourse,
            });
        }
        catch (error) {
            return reply
                .status(500)
                .send({ error: "Internal Server Error", details: error });
        }
    });
};
exports.deleteCourse = deleteCourse;
