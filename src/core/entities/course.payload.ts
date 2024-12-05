export interface CoursePayload {
    uuid?: string; 
    course_name?: string; 
    course_duration?: string; 
    course_description?: string; 
    // teacher_id?: string; // Foreign key referencing the teacher who teaches the course
}
