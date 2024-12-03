import { TeacherRepository } from "@core/repositories/teacher.repo";
import { TeacherPayload } from "@core/entities/teacher.payload";
import { TeacherOmmit } from "@core/entities/teacher.ommit";
import TeacherModel from "@infrastructure/database/models/teacher.model";

export class TeacherRepositoryImpl implements TeacherRepository {

  async createTeacher(teacherPayload: TeacherOmmit): Promise<TeacherOmmit> {
    const teacher = await TeacherModel.create(teacherPayload);
    return teacher as unknown as TeacherOmmit;
  }

  async getTeacher(uuid: string): Promise<TeacherOmmit | undefined> {
    const teacher = await TeacherModel.findOne({ where: { uuid } });
    return teacher as unknown as TeacherOmmit;
  }

  async getAllTeacher(): Promise<TeacherOmmit[]> {
    const teachers = await TeacherModel.findAll();
    return teachers as unknown as TeacherOmmit[];
  }

  async deleteTeacher(uuid: string): Promise<TeacherOmmit | undefined> {
    const teacher = await TeacherModel.findOne({ where: { uuid } });
    if (teacher) {
      await teacher.destroy();
      return teacher as unknown as TeacherOmmit;
    }
    return undefined;
  }

  async updateTeacher(uuid: string, updates: Partial<TeacherPayload>): Promise<TeacherOmmit | undefined> {
    const teacher = await TeacherModel.findOne({ where: { uuid } });
    if (teacher) {
      const updatedTeacher = await teacher.update(updates);
      return updatedTeacher as unknown as TeacherOmmit;
    }
    return undefined;
  }
}
