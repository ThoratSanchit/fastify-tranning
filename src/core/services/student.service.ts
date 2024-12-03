import { StudentTrainingPayload } from "../entities/student.training.payload";
import { StudentBaap } from "../entities/student.baap.training";
import { IStudentRepository } from "../repositories/student.repo";

interface IStudentService {
    createStudent: (studentTrainingPayload: StudentTrainingPayload) => Promise<StudentBaap>;
    getStudent: (uuid: string) => Promise<StudentBaap | undefined>;
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
    getAllStudents: async (page: number, limit: number): Promise<StudentBaap[]> => {
        return await studentRepository.getAllStudents(page, limit);  // Passing page and limit
      },
    deleteStudent: async (uuid: string): Promise<StudentBaap | undefined> => {
        return await studentRepository.deleteStudent(uuid);
    },
    updateStudent: async (uuid: string, updates: Partial<StudentTrainingPayload>): Promise<StudentBaap | undefined> => {
        return await studentRepository.updateStudent(uuid, updates);
    }
});
