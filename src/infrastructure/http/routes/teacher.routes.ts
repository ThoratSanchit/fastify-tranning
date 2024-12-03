import { type RouteOptions } from "fastify";
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "@infrastructure/http/controller/teacher.controller";
import { type TeacherRepository } from "@core/repositories/teacher.repo";

export const teacherRoutes = (
  teacherRepository: TeacherRepository
): RouteOptions[] => [
  {
    method: "POST",
    url: "/teachers",
    handler: createTeacher(teacherRepository),
  },
  {
    method: "GET",
    url: "/teachers",
    handler: getAllTeachers(teacherRepository),
  },
  {
    method: "GET",
    url: "/teachers/:id", 
    handler: getTeacherById(teacherRepository),
  },
  {
    method: "PUT",
    url: "/teachers/:id",
    handler: updateTeacher(teacherRepository),
  },
  {
    method: "DELETE",
    url: "/teachers/:id",
    handler: deleteTeacher(teacherRepository),
  },
];
