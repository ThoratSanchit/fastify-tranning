// student.service.ts

import { StudentTrainingPayload } from "../entities/student.training.ommit";
import { StudentBaap } from "../entities/student.baap.training";
import { IStudentRepository } from "../repositories/student.repo";

interface IStudentService {
    createStudent: (studentTrainingPayload: StudentTrainingPayload) => Promise<StudentBaap>;
    getStudent: (uuid: string) => Promise<StudentBaap | undefined>;
    getStudentByTeacher: (teacherId: string) => Promise<StudentBaap[] | undefined>;

    getAllStudents: (page: number, limit: number) => Promise<StudentBaap[]>; 
    deleteStudent:(uuid:string)=>Promise<StudentBaap | undefined> 
    updateStudent:(uuid:string, updates:Partial<StudentTrainingPayload>)=>Promise<StudentBaap | undefined> 
}

export const StudentService = (
    studentRepository: IStudentRepository
): IStudentService => ({
    createStudent: async (studentPayload: StudentTrainingPayload): Promise<StudentBaap> => {
        return await studentRepository.createStudent(studentPayload);
    },
    getStudent: async (uuid: string): Promise<StudentBaap | undefined> => {
        return await studentRepository.getStudent(uuid);
    },
    getStudentByTeacher: async (teacherId: string): Promise<StudentBaap[] | undefined> => {
        return await studentRepository.getStudentByTeacher(teacherId);
    },
    getAllStudents: async (page: number, limit: number): Promise<StudentBaap[]> => {
        return await studentRepository.getAllStudents(page, limit); 
      },
    deleteStudent: async (uuid: string): Promise<StudentBaap | undefined> => {
        return await studentRepository.deleteStudent(uuid);
    },
    updateStudent: async (uuid: string, updates: Partial<StudentTrainingPayload>): Promise<StudentBaap | undefined> => {
        return await studentRepository.updateStudent(uuid, updates);
    }
});
