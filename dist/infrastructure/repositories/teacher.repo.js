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
exports.TeacherRepositoryImpl = void 0;
const teacher_model_1 = __importDefault(require("@infrastructure/database/models/teacher.model"));
class TeacherRepositoryImpl {
    createTeacher(teacherPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield teacher_model_1.default.create(teacherPayload);
            return teacher;
        });
    }
    getTeacher(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield teacher_model_1.default.findOne({ where: { uuid } });
            return teacher;
        });
    }
    getAllTeacher() {
        return __awaiter(this, void 0, void 0, function* () {
            const teachers = yield teacher_model_1.default.findAll();
            return teachers;
        });
    }
    deleteTeacher(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield teacher_model_1.default.findOne({ where: { uuid } });
            if (teacher) {
                yield teacher.destroy();
                return teacher;
            }
            return undefined;
        });
    }
    updateTeacher(uuid, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield teacher_model_1.default.findOne({ where: { uuid } });
            if (teacher) {
                const updatedTeacher = yield teacher.update(updates);
                return updatedTeacher;
            }
            return undefined;
        });
    }
}
exports.TeacherRepositoryImpl = TeacherRepositoryImpl;
