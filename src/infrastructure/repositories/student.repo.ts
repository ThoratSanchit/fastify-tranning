import { IStudentRepository } from "@core/repositories/student.repo";
import { StudentTrainingPayload } from "@core/entities/student.training.payload";
import { StudentBaap } from "@core/entities/student.baap.training";
import StudentModel from "@infrastructure/database/models/student.model";

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
  async getAllStudents(): Promise<StudentBaap[]> {
    const students = await StudentModel.findAll();
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
}
