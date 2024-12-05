export interface StudentBaap {
    uuid?: string;
    name?: string;
    email?: string;
    phone?: number;
    teacherId?:string;
    password?: string;
    enrolled?: boolean;
    courseId?:string
    page?: number; // Optional parameter
    limit?: number; 
}
    