import { ICourseRepository } from "@core/repositories/course.repo";
import type { FastifyReply, FastifyRequest } from "fastify";
import { CourseService } from "@core/services/course.service";
import type { CoursePayload } from "@core/entities/course.payload";

// Create a course
export const createCourse = (courseRepository: ICourseRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const course = await CourseService(courseRepository).createCourse(
        request.body as CoursePayload
      );
      void reply.status(201).send(course);
    } catch (error) {
      reply
        .status(500)
        .send({ error: "Failed to create course", details: error });
    }
  };

// Get all courses
export const getAllCourses = (courseRepository: ICourseRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    const { page = 1, limit = 10 } = request.query as {
      page: number;
      limit: number;
    };

    try {
      const courses = await CourseService(courseRepository).getAllCourses(
        page,
        limit
      );
      return reply.status(200).send(courses);
    } catch (error) {
      return reply
        .status(500)
        .send({ error: "Internal Server Error", details: error });
    }
  };

// Get a course by ID
export const getCourseById = (courseRepository: ICourseRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };

      const course = await CourseService(courseRepository).getCourse(id);

      if (!course) {
        return reply.status(404).send({ message: "Course not found" });
      }

      return reply.status(200).send(course);
    } catch (error) {
      return reply
        .status(500)
        .send({ error: "Internal Server Error", details: error });
    }
  };

// Update a course
export const updateCourse = (courseRepository: ICourseRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { uuid } = request.params as { uuid: string };
      const updates = request.body as Partial<CoursePayload>;

      const updatedCourse = await CourseService(courseRepository).updateCourse(
        uuid,
        updates
      );

      if (!updatedCourse) {
        return reply
          .status(404)
          .send({ message: "Course not found or could not be updated" });
      }

      return reply.status(200).send(updatedCourse);
    } catch (error) {
      return reply
        .status(500)
        .send({ error: "Internal Server Error", details: error });
    }
  };

// Delete a course
export const deleteCourse = (courseRepository: ICourseRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { uuid } = request.params as { uuid: string };

      const deletedCourse = await CourseService(courseRepository).deleteCourse(
        uuid
      );

      if (!deletedCourse) {
        return reply
          .status(404)
          .send({ message: "Course not found or could not be deleted" });
      }

      return reply.status(200).send({
        message: "Course deleted successfully",
        course: deletedCourse,
      });
    } catch (error) {
      return reply
        .status(500)
        .send({ error: "Internal Server Error", details: error });
    }
  };
