import { type RouteOptions } from "fastify";
import { IStudentRepository } from "@core/repositories/student.repo";
import { TeacherRepository } from "@core/repositories/teacher.repo";
import { ICourseRepository } from "@core/repositories/course.repo";

import { studentRoutes } from "@infrastructure/http/routes/student.routes";
import { teacherRoutes } from "@infrastructure/http/routes/teacher.routes";
import { courseRoutes } from "@infrastructure/http/routes/course.route";

export default (
  studentRepository: IStudentRepository,
  teacherRepository: TeacherRepository,
  courseRepository: ICourseRepository // Corrected parameter name here
): RouteOptions[] => [
  ...studentRoutes(studentRepository),  
  ...teacherRoutes(teacherRepository), 
  ...courseRoutes(courseRepository) // Corrected argument here
];
