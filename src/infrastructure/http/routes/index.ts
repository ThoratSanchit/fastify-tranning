import { type RouteOptions } from "fastify";
import { IStudentRepository } from "@core/repositories/student.repo";
import { TeacherRepository } from "@core/repositories/teacher.repo";
import { studentRoutes } from "@infrastructure/http/routes/student.routes";
import { teacherRoutes } from "@infrastructure/http/routes/teacher.routes";

export default (
  studentRepository: IStudentRepository,
  teacherRepository: TeacherRepository
): RouteOptions[] => [
  ...studentRoutes(studentRepository),  
  ...teacherRoutes(teacherRepository),  
];
