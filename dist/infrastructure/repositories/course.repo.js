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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const course_model_1 = __importDefault(require("@infrastructure/database/models/course.model"));
class CourseRepository {
    createCourse(coursePayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield course_model_1.default.create(coursePayload); // ORM
            return course;
        });
    }
    getCourse(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield course_model_1.default.findOne({ where: { uuid } });
            return course ? course : undefined;
        });
    }
    getAllCourses(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const offset = (page - 1) * limit;
            const courses = yield course_model_1.default.findAll({
                offset,
                limit,
            });
            return courses;
        });
    }
    deleteCourse(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield course_model_1.default.findOne({ where: { uuid } });
            if (course) {
                yield course.destroy();
                return course;
            }
            return undefined;
        });
    }
    updateCourse(uuid, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield course_model_1.default.findOne({ where: { uuid } });
            if (course) {
                const updatedCourse = yield course.update(updates);
                return updatedCourse;
            }
            return undefined;
        });
    }
    getCoursesByTeacher(teacherId) {
        return __awaiter(this, void 0, void 0, function* () {
            const courses = yield course_model_1.default.findAll({ where: { teacherId } });
            return courses.length
                ? courses.map((course) => course.get())
                : undefined;
        });
    }
}
exports.CourseRepository = CourseRepository;
