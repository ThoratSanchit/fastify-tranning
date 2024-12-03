//student.repo.ts
import { IStudentRepository } from "@core/repositories/student.repo";
import { StudentTrainingPayload } from "@core/entities/student.training.payload";
import { StudentBaap } from "@core/entities/student.baap.training";
import StudentModel from "@infrastructure/database/models/student.model";
import TeacherModel from "@infrastructure/database/models/teacher.model";

export class StudentRepository implements IStudentRepository {
  async createStudent(
    studentPayload: StudentTrainingPayload
  ): Promise<StudentBaap> {
    const student = await StudentModel.create(studentPayload); //ORM
    return student as unknown as StudentBaap;
  }

  async getStudent(uuid: string): Promise<StudentBaap | undefined> {
    const student = await StudentModel.findOne({ where: { uuid } });
    return student as unknown as StudentBaap;
  }

  async getAllStudents(page: number, limit: number): Promise<StudentBaap[]> {
    const offset = (page - 1) * limit;

    const students = await StudentModel.findAll({
      offset,
      limit,
    });

    return students as unknown as StudentBaap[];
  }

  async deleteStudent(uuid: string): Promise<StudentBaap | undefined> {
    const student = await StudentModel.findOne({ where: { uuid } });
    if (student) {
      await student.destroy();
      return student as unknown as StudentBaap;
    }
    return undefined;
  }

  async updateStudent(
    uuid: string,
    updates: Partial<StudentTrainingPayload>
  ): Promise<StudentBaap | undefined> {
    const student = await StudentModel.findOne({ where: { uuid } });
    if (student) {
      const updatedStudent = await student.update(updates);
      return updatedStudent as unknown as StudentBaap;
    }
    return undefined;
  }

  async getStudentByTeacher(teacherId: string): Promise<StudentBaap[] | undefined> {
    const students = await StudentModel.findAll({ where: { teacherId:teacherId } });
    return students.length ? students.map((student) => student.get() as StudentBaap) : undefined; // Ensure array return type
  }
}
