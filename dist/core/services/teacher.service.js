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
exports.TeacherService = void 0;
const TeacherService = (teacherRepository) => ({
    createTeacher: (teacherPayload) => __awaiter(void 0, void 0, void 0, function* () { return yield teacherRepository.createTeacher(teacherPayload); }),
    getTeacher: (uuid) => __awaiter(void 0, void 0, void 0, function* () { return yield teacherRepository.getTeacher(uuid); }),
    getAllTeachers: () => __awaiter(void 0, void 0, void 0, function* () { return yield teacherRepository.getAllTeacher(); }),
    deleteTeacher: (uuid) => __awaiter(void 0, void 0, void 0, function* () { return yield teacherRepository.deleteTeacher(uuid); }),
    updateTeacher: (uuid, updates) => __awaiter(void 0, void 0, void 0, function* () { return yield teacherRepository.updateTeacher(uuid, updates); }),
});
exports.TeacherService = TeacherService;
