//student.baap.traning.ts
export interface StudentBaap {
  uuid?: string;
  name?: string;
  email?: string;
  phone?: number;

  teacher_name?: string;
  teacher?: string;
  course?: string;
  password?: string;
  enrolled?: boolean;
  courseId?: string;
  page?: number; // Optional parameter
  limit?: number;
}
