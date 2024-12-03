import { type RouteOptions, type RouteHandlerMethod } from "fastify";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "@infrastructure/http/controller/student.controller";
import { type IStudentRepository } from "@core/repositories/student.repo";
import { deleteStudentSchema, getStudentByID, postStudentSchema, putStudentSchema } from "../schemas/student.schemas";

export const studentRoutes = (
  studentRepository: IStudentRepository
): RouteOptions[] => [
  {
    method: "POST",
    url: "/students",
    schema: postStudentSchema,
    handler: createStudent(studentRepository),
  },
  {
    method: "GET",
    url: "/students",
    // schema: findAllStudentsSchema,
    handler: getAllStudents(studentRepository),
  },
  {
    method: "GET",
    url: "/students/:id",
    schema: getStudentByID, 
    handler: getStudentById(studentRepository),
  },
  {
    method: "PUT",
    url: "/students/:id",
    schema:putStudentSchema,
    handler: updateStudent(studentRepository),
  },
  {
    method: "DELETE",
    url: "/studentUser/:id",
    schema:deleteStudentSchema,
    handler: deleteStudent(studentRepository),
  },
];
