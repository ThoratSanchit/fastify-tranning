"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const course_controller_1 = require("@infrastructure/http/controller/course.controller");
const courseRoutes = (courseRepository) => [
    {
        method: "POST",
        url: "/courses",
        handler: (0, course_controller_1.createCourse)(courseRepository),
    },
    {
        method: "GET",
        url: "/courses",
        handler: (0, course_controller_1.getAllCourses)(courseRepository),
    },
    //   {
    //     method: "GET",
    //     url: "/courses-teacher/:teacherId",
    //     // handler: getCoursesByTeacherId(courseRepository),
    //   },
    {
        method: "GET",
        url: "/courses/:id",
        handler: (0, course_controller_1.getCourseById)(courseRepository),
    },
    {
        method: "PUT",
        url: "/courses/:uuid",
        handler: (0, course_controller_1.updateCourse)(courseRepository),
    },
    {
        method: "DELETE",
        url: "/courseUser/:uuid",
        handler: (0, course_controller_1.deleteCourse)(courseRepository),
    },
];
exports.courseRoutes = courseRoutes;
