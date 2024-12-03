import { StudentTrainingPayload } from "../entities/student.training.payload";

import { StudentBaap } from "@core/entities/student.baap.training";

export interface IStudentRepository {
    createStudent: (studentPayload: StudentTrainingPayload) => Promise<StudentBaap>;
    getStudent: (uuid: string) => Promise<StudentBaap | undefined>;
    getAllStudents: () => Promise<StudentBaap[]>; 
    deleteStudent:(uuid:string)=>Promise<StudentBaap | undefined> 
    updateStudent:(uuid:string, updates:Partial<StudentTrainingPayload>)=>Promise<StudentBaap | undefined> 
}
