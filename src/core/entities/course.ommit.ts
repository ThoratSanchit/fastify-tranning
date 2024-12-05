import  {CoursePayload}  from "@core/entities/course.payload";

export type CourseOmmit = Omit<CoursePayload, 'uuid'>;

