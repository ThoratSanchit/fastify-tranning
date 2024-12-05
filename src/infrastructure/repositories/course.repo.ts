import { ICourseRepository } from "@core/repositories/course.repo";
import { CoursePayload } from "@core/entities/course.payload";
import { CourseOmmit } from "@core/entities/course.ommit";
import CourseModel from "@infrastructure/database/models/course.model";

export class CourseRepository implements ICourseRepository {
  async createCourse(coursePayload: CourseOmmit): Promise<CourseOmmit> {
    const course = await CourseModel.create(coursePayload); // ORM
    return course as unknown as CourseOmmit;
  }

  async getCourse(uuid: string): Promise<CourseOmmit | undefined> {
    const course = await CourseModel.findOne({ where: { uuid } });
    return course ? (course as unknown as CourseOmmit) : undefined;
  }

  async getAllCourses(page: number, limit: number): Promise<CourseOmmit[]> {
    const offset = (page - 1) * limit;

    const courses = await CourseModel.findAll({
      offset,
      limit,
    });

    return courses as unknown as CourseOmmit[];
  }

  async deleteCourse(uuid: string): Promise<CourseOmmit | undefined> {
    const course = await CourseModel.findOne({ where: { uuid } });
    if (course) {
      await course.destroy();
      return course as unknown as CourseOmmit;
    }
    return undefined;
  }

  async updateCourse(
    uuid: string,
    updates: Partial<CoursePayload>
  ): Promise<CourseOmmit | undefined> {
    const course = await CourseModel.findOne({ where: { uuid } });
    if (course) {
      const updatedCourse = await course.update(updates);
      return updatedCourse as unknown as CourseOmmit;
    }
    return undefined;
  }

  async getCoursesByTeacher(
    teacherId: string
  ): Promise<CourseOmmit[] | undefined> {
    const courses = await CourseModel.findAll({ where: { teacherId } });
    return courses.length
      ? courses.map((course) => course.get() as CourseOmmit)
      : undefined;
  }
}
