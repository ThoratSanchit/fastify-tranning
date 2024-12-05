// course.service.ts

import { CoursePayload } from "../entities/course.payload";
import { CourseOmmit } from "../entities/course.ommit";
import { ICourseRepository } from "../repositories/course.repo";

interface ICourseService {
    createCourse: (coursePayload: CoursePayload) => Promise<CourseOmmit>;
    getCourse: (uuid: string) => Promise<CourseOmmit | undefined>;
    getCoursesByTeacher: (teacherId: string) => Promise<CourseOmmit[] | undefined>;
    getAllCourses: (page: number, limit: number) => Promise<CourseOmmit[]>;
    deleteCourse: (uuid: string) => Promise<CourseOmmit | undefined>;
    updateCourse: (uuid: string, updates: Partial<CoursePayload>) => Promise<CourseOmmit | undefined>;
}

export const CourseService = (
    courseRepository: ICourseRepository
): ICourseService => ({
    createCourse: async (coursePayload: CoursePayload): Promise<CourseOmmit> => {
        return await courseRepository.createCourse(coursePayload);
    },
    getCourse: async (uuid: string): Promise<CourseOmmit | undefined> => {
        return await courseRepository.getCourse(uuid);
    },
    getCoursesByTeacher: async (teacherId: string): Promise<CourseOmmit[] | undefined> => {
        return await courseRepository.getCoursesByTeacher(teacherId);
    },
    getAllCourses: async (page: number, limit: number): Promise<CourseOmmit[]> => {
        return await courseRepository.getAllCourses(page, limit);
    },
    deleteCourse: async (uuid: string): Promise<CourseOmmit | undefined> => {
        return await courseRepository.deleteCourse(uuid);
    },
    updateCourse: async (uuid: string, updates: Partial<CoursePayload>): Promise<CourseOmmit | undefined> => {
        return await courseRepository.updateCourse(uuid, updates);
    },
});
