import { IStudentRepository } from "@core/repositories/student.repo";

import type { FastifyReply, FastifyRequest } from "fastify";
import { StudentService } from "@core/services/student.service";
import type { StudentTrainingPayload } from "@core/entities/student.training.payload";
// import { StudentRepository } from "@infrastructure/repositories/student.repo";

export const createStudent = (studentRepository: IStudentRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    const student = await StudentService(studentRepository).createStudent(
      request.body as StudentTrainingPayload
    );
    void reply.status(201).send(student);
  };

export const getAllStudents = (studentRepository: IStudentRepository) =>
  async function (req: FastifyRequest, rep: FastifyReply) {
    const students = await StudentService(studentRepository).getAllStudents();
    void rep.status(200).send(students);
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

export const updateStudent = (studentRepository: IStudentRepository) =>
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const updates = request.body as Partial<StudentTrainingPayload>;

      const updatedStudent = await StudentService(
        studentRepository
      ).updateStudent(id, updates);

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
      const { id } = request.params as { id: string };

      const deletedStudent = await StudentService(
        studentRepository
      ).deleteStudent(id);

      if (!deletedStudent) {
        return reply
          .status(404)
          .send({ message: "Student not found or could not be deleted" });
      }

      return reply
        .status(200)
        .send({
          message: "Student deleted successfully",
          student: deletedStudent,
        });
    } catch (error) {
      return reply.status(500).send({ message: "Internal Server Error" });
    }
  };
