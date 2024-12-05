import { type RouteOptions, type RouteHandlerMethod } from "fastify";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "@infrastructure/http/controller/course.controller";
import { type ICourseRepository } from "@core/repositories/course.repo";

export const courseRoutes = (
  courseRepository: ICourseRepository
): RouteOptions[] => [
  {
    method: "POST",
    url: "/courses",

    handler: createCourse(courseRepository),
  },
  {
    method: "GET",
    url: "/courses",

    handler: getAllCourses(courseRepository),
  },
  //   {
  //     method: "GET",
  //     url: "/courses-teacher/:teacherId",
  //     // handler: getCoursesByTeacherId(courseRepository),
  //   },
  {
    method: "GET",
    url: "/courses/:id",

    handler: getCourseById(courseRepository),
  },
  {
    method: "PUT",
    url: "/courses/:uuid",

    handler: updateCourse(courseRepository),
  },
  {
    method: "DELETE",
    url: "/courseUser/:uuid",

    handler: deleteCourse(courseRepository),
  },
];
