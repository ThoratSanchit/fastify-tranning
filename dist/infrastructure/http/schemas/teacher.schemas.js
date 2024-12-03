"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacherSchema = exports.putTeacherSchema = exports.getAllTeachersSchema = exports.getAllTeachersQuery = exports.getTeacherByIdSchema = exports.postTeacherSchema = exports.teacherNotFoundSchema = exports.TeacherResponse = exports.TeacherPayload = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.TeacherPayload = typebox_1.Type.Object({
    name: typebox_1.Type.String({ description: "Name of the teacher" }),
    className: typebox_1.Type.String({ description: "Class assigned to the teacher" }),
});
exports.TeacherResponse = typebox_1.Type.Object({
    uuid: typebox_1.Type.Optional(typebox_1.Type.String({ description: "Unique identifier of the teacher" })),
    name: typebox_1.Type.Optional(typebox_1.Type.String({ description: "Name of the teacher" })),
    className: typebox_1.Type.Optional(typebox_1.Type.String({ description: "Class assigned to the teacher" })),
});
exports.teacherNotFoundSchema = typebox_1.Type.Object({
    statusCode: typebox_1.Type.Number({ example: 404 }),
    error: typebox_1.Type.String({ example: "Not found" }),
    message: typebox_1.Type.String({ example: "Teacher record not found in database" }),
});
const TeacherParams = typebox_1.Type.Object({
    uuid: typebox_1.Type.String({ description: "Teacher Id" }),
});
exports.postTeacherSchema = {
    description: "Create a new Teacher",
    summary: "Creates a new teacher",
    body: exports.TeacherPayload,
    response: {
        201: Object.assign(Object.assign({}, exports.TeacherResponse), { description: "Success" }),
    },
};
exports.getTeacherByIdSchema = {
    description: "Gets a single Teacher by ID",
    tags: ["Teacher"],
    summary: "Fetches a teacher by ID",
    params: TeacherParams,
    response: {
        200: Object.assign(Object.assign({}, exports.TeacherResponse), { description: "Success" }),
        404: Object.assign(Object.assign({}, exports.teacherNotFoundSchema), { description: "Not found" }),
    },
};
exports.getAllTeachersQuery = typebox_1.Type.Object({
    page: typebox_1.Type.Optional(typebox_1.Type.Integer({ minimum: 1, default: 1 })),
    limit: typebox_1.Type.Optional(typebox_1.Type.Integer({ minimum: 1, default: 10 })),
    sortBy: typebox_1.Type.Optional(typebox_1.Type.String({ enum: ["name", "className"], default: "name" })),
    sortOrder: typebox_1.Type.Optional(typebox_1.Type.String({ enum: ["asc", "desc"], default: "asc" })),
});
exports.getAllTeachersSchema = {
    description: "Get all teachers",
    tags: ["Teacher"],
    summary: "Fetches all teachers with optional pagination and sorting",
    querystring: exports.getAllTeachersQuery,
    response: {
        200: typebox_1.Type.Array(exports.TeacherResponse),
    },
};
exports.putTeacherSchema = {
    description: "Update an existing Teacher",
    tags: ["Teacher"],
    summary: "Updates Teacher details",
    params: TeacherParams,
    body: typebox_1.Type.Partial(exports.TeacherPayload),
    response: {
        200: Object.assign(Object.assign({}, exports.TeacherResponse), { description: "Updated successfully" }),
        404: Object.assign(Object.assign({}, exports.teacherNotFoundSchema), { description: "Not found" }),
    },
};
exports.deleteTeacherSchema = {
    description: "Delete a Teacher",
    tags: ["Teacher"],
    summary: "Deletes a teacher by ID",
    params: TeacherParams,
    response: {
        204: { description: "Deleted successfully", type: "null" },
        404: Object.assign(Object.assign({}, exports.teacherNotFoundSchema), { description: "Not found" }),
    },
};
