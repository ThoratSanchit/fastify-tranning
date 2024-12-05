// course.repo.ts
import { CoursePayload } from "../entities/course.payload";
import { CourseOmmit } from "@core/entities/course.ommit";

export interface ICourseRepository {
    createCourse: (coursePayload: CoursePayload) => Promise<CourseOmmit>;
    getCourse: (uuid: string) => Promise<CourseOmmit | undefined>;
    getAllCourses: (page: number, limit: number) => Promise<CourseOmmit[]>;
    deleteCourse: (uuid: string) => Promise<CourseOmmit | undefined>;
    updateCourse: (uuid: string, updates: Partial<CoursePayload>) => Promise<CourseOmmit | undefined>;
    getCoursesByTeacher: (teacherId: string) => Promise<CourseOmmit[] | undefined>;
}
