export interface StudentBaap {
    uuid?: string;
    name?: string;
    email?: string;
    phone?: number;
    teacherId?:string;
    password?: string;
    enrolled?: boolean;
    page?: number; // Optional parameter
    limit?: number; 
}
    