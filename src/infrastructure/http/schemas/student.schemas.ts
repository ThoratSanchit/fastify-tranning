import {FastifySchema} from "fastify";
import {Static, Type} from "@sinclair/typebox";

export const StudentPayload = Type.Object({
    name: Type.String(),
    email: Type.String(),
    password: Type.String(),
    phone:Type.Integer(),
    enrolled:Type.Boolean(),
    teacherId:Type.String(),
});

export const StudentResponse = Type.Object({
    uuid: Type.Optional(Type.String()),
    name: Type.Optional(Type.String()),
    email: Type.Optional(Type.String()),
    password: Type.Optional(Type.String()),
    phone: Type.Optional(Type.Integer()),
    enrolled:Type.Optional(Type.Boolean()),
    teacherId:Type.Optional(Type.String())
});

export const postStudentSchema: FastifySchema = {
    description: 'Create a new Student',
    // tags: ['Student'],
    summary: 'Creates a new student',
    body: StudentPayload,
    response: {
        201: { ...StudentResponse, description: 'Success' },
    },
};

export const notFoundSchema = Type.Object({
    statusCode: Type.Number({ example: 404 }),
    error: Type.String({ example: 'Not found' }),
    message: Type.String({ example: 'Student record not found in database' })
})

const StudentParams = Type.Object({
    uuid: Type.String({ description: 'Student Id' }),
})

export const getStudentByID: FastifySchema = {
    description: 'Gets a single Student',
    tags: ['Student'],
    summary: 'Gets Student by Id',
    params: StudentParams,
    response: {
        200: { ...StudentResponse, description: 'Success' },
        404: { ...notFoundSchema, description: 'Not found' },
    },
};

export const GetAllStudentsQuery = Type.Object({
    page: Type.Optional(Type.Integer({ minimum: 1, default: 1 })),  // Pagination: page number
    limit: Type.Optional(Type.Integer({ minimum: 1, default: 10 })), // Pagination: number of records per page
    sortBy: Type.Optional(Type.String({ enum: ["name", "email", "phone", "enrolled"], default: "name" })),  // Sorting criteria
    sortOrder: Type.Optional(Type.String({ enum: ["asc", "desc"], default: "asc" })),  // Sorting order: ascending or descending
  });
  
  export const getAllStudentsSchema: FastifySchema = {
    description: "Get all students",
    tags: ["Student"],
    summary: "Fetches all students with optional pagination and sorting",
    querystring: GetAllStudentsQuery, // Query parameters validation
    response: {
      200: Type.Array(StudentResponse), // Returns an array of students in the response
    },
  };

export const putStudentSchema: FastifySchema = {
    description: 'Update an existing Student',
    tags: ['Student'],
    summary: 'Updates Student details',
    params: StudentParams,
    body: Type.Partial(StudentPayload), // Allows updating only specific fields
    response: {
        200: { ...StudentResponse, description: 'Updated successfully' },
        404: { ...notFoundSchema, description: 'Not found' },
    },
};
export const deleteStudentSchema: FastifySchema = {
    description: 'Delete a Student',
    tags: ['Student'],
    summary: 'Deletes a student by Id',
    params: StudentParams,
    response: {
        204: { description: 'Deleted successfully', type: 'null' }, // No content on success
        404: { ...notFoundSchema, description: 'Not found' },
    },
};





export type StudentParamsType = Static<typeof StudentParams>;