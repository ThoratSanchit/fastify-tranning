import { StudentBaap } from "./student.baap.training";

export type StudentTrainingPayload = Omit<StudentBaap, 'uuid'>;
