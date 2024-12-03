"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentSchema = exports.putStudentSchema = exports.getAllStudentsSchema = exports.GetAllStudentsQuery = exports.getStudentByID = exports.notFoundSchema = exports.postStudentSchema = exports.StudentResponse = exports.StudentPayload = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.StudentPayload = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
    phone: typebox_1.Type.Integer(),
    enrolled: typebox_1.Type.Boolean()
});
exports.StudentResponse = typebox_1.Type.Object({
    uuid: typebox_1.Type.Optional(typebox_1.Type.String()),
    name: typebox_1.Type.Optional(typebox_1.Type.String()),
    email: typebox_1.Type.Optional(typebox_1.Type.String()),
    password: typebox_1.Type.Optional(typebox_1.Type.String()),
    phone: typebox_1.Type.Optional(typebox_1.Type.Integer()),
    enrolled: typebox_1.Type.Optional(typebox_1.Type.Boolean())
});
exports.postStudentSchema = {
    description: 'Create a new Student',
    // tags: ['Student'],
    summary: 'Creates a new student',
    body: exports.StudentPayload,
    response: {
        201: Object.assign(Object.assign({}, exports.StudentResponse), { description: 'Success' }),
    },
};
exports.notFoundSchema = typebox_1.Type.Object({
    statusCode: typebox_1.Type.Number({ example: 404 }),
    error: typebox_1.Type.String({ example: 'Not found' }),
    message: typebox_1.Type.String({ example: 'Student record not found in database' })
});
const StudentParams = typebox_1.Type.Object({
    uuid: typebox_1.Type.String({ description: 'Student Id' }),
});
exports.getStudentByID = {
    description: 'Gets a single Student',
    tags: ['Student'],
    summary: 'Gets Student by Id',
    params: StudentParams,
    response: {
        200: Object.assign(Object.assign({}, exports.StudentResponse), { description: 'Success' }),
        404: Object.assign(Object.assign({}, exports.notFoundSchema), { description: 'Not found' }),
    },
};
exports.GetAllStudentsQuery = typebox_1.Type.Object({
    page: typebox_1.Type.Optional(typebox_1.Type.Integer({ minimum: 1, default: 1 })), // Pagination: page number
    limit: typebox_1.Type.Optional(typebox_1.Type.Integer({ minimum: 1, default: 10 })), // Pagination: number of records per page
    sortBy: typebox_1.Type.Optional(typebox_1.Type.String({ enum: ["name", "email", "phone", "enrolled"], default: "name" })), // Sorting criteria
    sortOrder: typebox_1.Type.Optional(typebox_1.Type.String({ enum: ["asc", "desc"], default: "asc" })), // Sorting order: ascending or descending
});
exports.getAllStudentsSchema = {
    description: "Get all students",
    tags: ["Student"],
    summary: "Fetches all students with optional pagination and sorting",
    querystring: exports.GetAllStudentsQuery, // Query parameters validation
    response: {
        200: typebox_1.Type.Array(exports.StudentResponse), // Returns an array of students in the response
    },
};
exports.putStudentSchema = {
    description: 'Update an existing Student',
    tags: ['Student'],
    summary: 'Updates Student details',
    params: StudentParams,
    body: typebox_1.Type.Partial(exports.StudentPayload), // Allows updating only specific fields
    response: {
        200: Object.assign(Object.assign({}, exports.StudentResponse), { description: 'Updated successfully' }),
        404: Object.assign(Object.assign({}, exports.notFoundSchema), { description: 'Not found' }),
    },
};
exports.deleteStudentSchema = {
    description: 'Delete a Student',
    tags: ['Student'],
    summary: 'Deletes a student by Id',
    params: StudentParams,
    response: {
        204: { description: 'Deleted successfully', type: 'null' }, // No content on success
        404: Object.assign(Object.assign({}, exports.notFoundSchema), { description: 'Not found' }),
    },
};
