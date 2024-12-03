import { TeacherPayload } from "@core/entities/teacher.payload";

export type TeacherOmmit = Omit<TeacherPayload, 'uuid'>;
