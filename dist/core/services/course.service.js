"use strict";
// course.service.ts
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
exports.CourseService = void 0;
const CourseService = (courseRepository) => ({
    createCourse: (coursePayload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield courseRepository.createCourse(coursePayload);
    }),
    getCourse: (uuid) => __awaiter(void 0, void 0, void 0, function* () {
        return yield courseRepository.getCourse(uuid);
    }),
    getCoursesByTeacher: (teacherId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield courseRepository.getCoursesByTeacher(teacherId);
    }),
    getAllCourses: (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
        return yield courseRepository.getAllCourses(page, limit);
    }),
    deleteCourse: (uuid) => __awaiter(void 0, void 0, void 0, function* () {
        return yield courseRepository.deleteCourse(uuid);
    }),
    updateCourse: (uuid, updates) => __awaiter(void 0, void 0, void 0, function* () {
        return yield courseRepository.updateCourse(uuid, updates);
    }),
});
exports.CourseService = CourseService;
