//student.controller.ts
import { IStudentRepository } from "@core/repositories/student.repo";

import type { FastifyReply, FastifyRequest } from "fastify";
import { StudentService } from "@core/services/student.service";
import type { StudentTrainingPayload } from "@core/entities/student.training.ommit";

export const createStudent = (studentRepository: IStudentRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    const student = await StudentService(studentRepository).createStudent(
      request.body as StudentTrainingPayload
    );
    void reply.status(201).send(student);
  };
export const getAllStudents = (studentService: IStudentRepository) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { page = 1, limit = 10 } = request.query as {
      page: number;
      limit: number;
    };

    try {
      const students = await studentService.getAllStudents(page, limit);

      return reply.code(200).send(students);
    } catch (error) {
      return reply.code(500).send({ error: "Internal Server Error" });
    }
  };
};

export const getStudentById = (studentRepository: IStudentRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };

      const student = await StudentService(studentRepository).getStudent(id);

      if (!student) {
        return reply.status(404).send({ message: "Student not found" });
      }

      return reply.status(200).send(student);
    } catch (error) {
      return reply.status(500).send({ message: "Internal Server Error" });
    }
  };



  export const getStudentByteacherId = (studentRepository: IStudentRepository) =>
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        const {  teacherId } = request.params as { teacherId: string };
  
        const students = await StudentService(studentRepository).getStudentByTeacher(teacherId);
  
        if (!students || students.length === 0) {
          return reply.status(404).send({ message: "No students found for this teacher" });
        }
  
        return reply.status(200).send(students);
      } catch (error) {
        return reply.status(500).send({ message: "Internal Server Error", error });
      }
    };
  
export const updateStudent = (studentRepository: IStudentRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { uuid } = request.params as { uuid: string };
      const updates = request.body as Partial<StudentTrainingPayload>;

      const updatedStudent = await StudentService(
        studentRepository
      ).updateStudent(uuid, updates);

      if (!updatedStudent) {
        return reply
          .status(404)
          .send({ message: "Student not found or could not be updated" });
      }

      return reply.status(200).send(updatedStudent);
    } catch (error) {
      return reply.status(500).send({ message: "Internal Server Error" });
    }
  };

export const deleteStudent = (studentRepository: IStudentRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { uuid } = request.params as { uuid: string };

      const deletedStudent = await StudentService(
        studentRepository
      ).deleteStudent(uuid);

      if (!deletedStudent) {
        return reply
          .status(404)
          .send({ message: "Student not found or could not be deleted" });
      }

      return reply.status(200).send({
        message: "Student deleted successfully",
        student: deletedStudent,
      });
    } catch (error) {
      return reply.status(500).send({ message: "Internal Server Error" });
    }
  };
