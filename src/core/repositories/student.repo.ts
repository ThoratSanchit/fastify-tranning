// student.repo.ts
import { StudentTrainingPayload } from "../entities/student.training.ommit";

import { StudentBaap } from "@core/entities/student.baap.training";

export interface IStudentRepository {
    createStudent: (studentPayload: StudentTrainingPayload) => Promise<StudentBaap>;
    getStudent: (uuid: string) => Promise<StudentBaap | undefined>;
    getAllStudents: (page: number, limit: number) => Promise<StudentBaap[]>;
    deleteStudent:(uuid:string)=>Promise<StudentBaap | undefined> 
    updateStudent:(uuid:string, updates:Partial<StudentTrainingPayload>)=>Promise<StudentBaap | undefined> 
    getStudentByTeacher: (teacherId: string) => Promise<StudentBaap[] | undefined>; 
}
