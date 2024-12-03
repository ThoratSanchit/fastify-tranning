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
exports.StudentRepository = void 0;
const student_model_1 = __importDefault(require("@infrastructure/database/models/student.model"));
class StudentRepository {
    createStudent(studentPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_1.default.create(studentPayload); //ORM
            return student;
        });
    }
    getStudent(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_1.default.findOne({ where: { uuid } });
            return student;
        });
    }
    getAllStudents(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            // Calculate offset for pagination
            const offset = (page - 1) * limit;
            // Fetch students with pagination and limit
            const students = yield student_model_1.default.findAll({
                offset,
                limit,
            });
            return students;
        });
    }
    deleteStudent(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_1.default.findOne({ where: { uuid } });
            if (student) {
                yield student.destroy();
                return student;
            }
            return undefined;
        });
    }
    updateStudent(uuid, updates) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_1.default.findOne({ where: { uuid } });
            if (student) {
                const updatedStudent = yield student.update(updates);
                return updatedStudent;
            }
            return undefined;
        });
    }
}
exports.StudentRepository = StudentRepository;
