//student.route.ts

import { type RouteOptions, type RouteHandlerMethod } from "fastify";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getStudentByteacherId,
} from "@infrastructure/http/controller/student.controller";
import { type IStudentRepository } from "@core/repositories/student.repo";
import {
  deleteStudentSchema,
  getAllStudentsSchema,
  getStudentByID,
  postStudentSchema,
  putStudentSchema,
} from "../schemas/student.schemas";
import verifyJwt from "@infrastructure/http/Auth/verifyJwt";
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
    // schema: getAllStudentsSchema,
    preHandler: verifyJwt,
    handler: getAllStudents(studentRepository),
  },
  {
    method: "GET",
    url: "/students-teacher/:teacherId",
    preHandler: verifyJwt,
    handler: getStudentByteacherId(studentRepository),
  },
  {
    method: "GET",
    url: "/students/:uuid",
    schema: getStudentByID,
    preHandler: verifyJwt,
    handler: getStudentById(studentRepository),
  },
  {
    method: "PUT",
    url: "/students/:uuid",
    schema: putStudentSchema,
    preHandler: verifyJwt,
    handler: updateStudent(studentRepository),
  },
  {
    method: "DELETE",
    url: "/studentUser/:uuid",
    schema: deleteStudentSchema,
    preHandler: verifyJwt,
    handler: deleteStudent(studentRepository),
  },
];
