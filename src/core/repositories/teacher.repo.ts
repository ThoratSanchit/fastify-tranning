// import { StudentTrainingPayload } from "../entities/student.training.payload";
import { TeacherPayload } from "@core/entities/teacher.payload";


import { TeacherOmmit } from "@core/entities/teacher.ommit";

export interface TeacherRepository {
    createTeacher: (studentPayload: TeacherPayload) => Promise<TeacherOmmit>;
    getTeacher: (uuid: string) => Promise<TeacherOmmit | undefined>;
    getAllTeacher: () => Promise<TeacherOmmit[]>; 
    deleteTeacher:(uuid:string)=>Promise<TeacherOmmit | undefined> 
    updateTeacher:(uuid:string, updates:Partial<TeacherPayload>)=>Promise<TeacherOmmit | undefined> 
}
