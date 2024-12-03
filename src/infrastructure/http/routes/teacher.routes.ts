import { type RouteOptions } from "fastify";
import {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "@infrastructure/http/controller/teacher.controller";
import { type TeacherRepository } from "@core/repositories/teacher.repo";
import {
  deleteTeacherSchema,
  putTeacherSchema,
  getAllTeachersQuery,
  postTeacherSchema,
  getTeacherByIdSchema,
} from "../schemas/teacher.schemas";


export const teacherRoutes = (
  teacherRepository: TeacherRepository
): RouteOptions[] => [
  {
    method: "POST",
    url: "/teachers",
    schema:postTeacherSchema,
    handler: createTeacher(teacherRepository),
  },
  {
    method: "GET",
    url: "/teachers",
    schema:getAllTeachersQuery,
    handler: getAllTeachers(teacherRepository),
  },
  {
    method: "GET",
    url: "/teachers/:uuid", 
    schema:getTeacherByIdSchema,
    handler: getTeacherById(teacherRepository),
  },
  {
    method: "PUT",
    url: "/teachers/:uuid",
    schema:putTeacherSchema,
    handler: updateTeacher(teacherRepository),
  },
  {
    method: "DELETE",
    url: "/teachers/:id",
    schema:deleteTeacherSchema,
    handler: deleteTeacher(teacherRepository),
  },
];
