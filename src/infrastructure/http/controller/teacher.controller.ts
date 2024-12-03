import { TeacherRepository } from "@core/repositories/teacher.repo";
import { TeacherService } from "@core/services/teacher.service";
import type { FastifyReply, FastifyRequest } from "fastify";
import { TeacherPayload } from "@core/entities/teacher.payload";

export const createTeacher = (teacherRepository: TeacherRepository) => async function (
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const teacher = await TeacherService(teacherRepository).createTeacher(request.body as TeacherPayload);
        reply.status(201).send(teacher);
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error });
    }
};

export const getAllTeachers = (teacherRepository: TeacherRepository) => async function (
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const teachers = await TeacherService(teacherRepository).getAllTeachers();
        reply.status(200).send(teachers);
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error });
    }
};

export const getTeacherById = (teacherRepository: TeacherRepository) => async function (
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const { id } = request.params as { id: string };
        const teacher = await TeacherService(teacherRepository).getTeacher(id);

        if (!teacher) {
            reply.status(404).send({ message: "Teacher not found" });
        } else {
            reply.status(200).send(teacher);
        }
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error });
    }
};

export const updateTeacher = (teacherRepository: TeacherRepository) => async function (
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const { id } = request.params as { id: string };
        const updates = request.body as Partial<TeacherPayload>;

        const updatedTeacher = await TeacherService(teacherRepository).updateTeacher(id, updates);

        if (!updatedTeacher) {
            reply.status(404).send({ message: "Teacher not found or could not be updated" });
        } else {
            reply.status(200).send(updatedTeacher);
        }
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error });
    }
};

export const deleteTeacher = (teacherRepository: TeacherRepository) => async function (
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const { id } = request.params as { id: string };

        const deletedTeacher = await TeacherService(teacherRepository).deleteTeacher(id);

        if (!deletedTeacher) {
            reply.status(404).send({ message: "Teacher not found or could not be deleted" });
        } else {
            reply.status(200).send({ message: "Teacher deleted successfully", teacher: deletedTeacher });
        }
    } catch (error) {
        reply.status(500).send({ message: "Internal Server Error", error });
    }
};
