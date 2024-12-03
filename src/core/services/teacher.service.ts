import { TeacherRepository } from "@core/repositories/teacher.repo";
import { TeacherPayload } from "@core/entities/teacher.payload";
import { TeacherOmmit } from "@core/entities/teacher.ommit";

interface TeacherService {
    createTeacher: (teacherPayload: TeacherPayload) => Promise<TeacherOmmit>;
    getTeacher: (uuid: string) => Promise<TeacherOmmit | undefined>;
    getAllTeachers: () => Promise<TeacherOmmit[]>;
    deleteTeacher: (uuid: string) => Promise<TeacherOmmit | undefined>;
    updateTeacher: (uuid: string, updates: Partial<TeacherPayload>) => Promise<TeacherOmmit | undefined>;
}

export const TeacherService = (teacherRepository: TeacherRepository): TeacherService => ({
    createTeacher: async (teacherPayload) => await teacherRepository.createTeacher(teacherPayload),
    getTeacher: async (uuid) => await teacherRepository.getTeacher(uuid),
    getAllTeachers: async () => await teacherRepository.getAllTeacher(),
    deleteTeacher: async (uuid) => await teacherRepository.deleteTeacher(uuid),
    updateTeacher: async (uuid, updates) => await teacherRepository.updateTeacher(uuid, updates),
});
