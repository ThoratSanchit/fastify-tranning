import { FastifySchema } from "fastify";
import { Static, Type } from "@sinclair/typebox";


export const TeacherPayload = Type.Object({
  name: Type.String({ description: "Name of the teacher" }),
  className: Type.String({ description: "Class assigned to the teacher" }),
});


export const TeacherResponse = Type.Object({
  uuid: Type.Optional(Type.String({ description: "Unique identifier of the teacher" })),
  name: Type.Optional(Type.String({ description: "Name of the teacher" })),
  className: Type.Optional(Type.String({ description: "Class assigned to the teacher" })),
});


export const teacherNotFoundSchema = Type.Object({
  statusCode: Type.Number({ example: 404 }),
  error: Type.String({ example: "Not found" }),
  message: Type.String({ example: "Teacher record not found in database" }),
});

const TeacherParams = Type.Object({
  uuid: Type.String({ description: "Teacher Id" }),
});


export const postTeacherSchema: FastifySchema = {
  description: "Create a new Teacher",
  summary: "Creates a new teacher",
  body: TeacherPayload,
  response: {
    201: { ...TeacherResponse, description: "Success" },
  },
};


export const getTeacherByIdSchema: FastifySchema = {
  description: "Gets a single Teacher by ID",
  tags: ["Teacher"],
  summary: "Fetches a teacher by ID",
  params: TeacherParams,
  response: {
    200: { ...TeacherResponse, description: "Success" },
    404: { ...teacherNotFoundSchema, description: "Not found" },
  },
};


export const getAllTeachersQuery = Type.Object({
  page: Type.Optional(Type.Integer({ minimum: 1, default: 1 })), 
  limit: Type.Optional(Type.Integer({ minimum: 1, default: 10 })), 
  sortBy: Type.Optional(
    Type.String({ enum: ["name", "className"], default: "name" })
  ), 
  sortOrder: Type.Optional(
    Type.String({ enum: ["asc", "desc"], default: "asc" })
  ),
});

export const getAllTeachersSchema: FastifySchema = {
  description: "Get all teachers",
  tags: ["Teacher"],
  summary: "Fetches all teachers with optional pagination and sorting",
  querystring: getAllTeachersQuery,
  response: {
    200: Type.Array(TeacherResponse),
  },
};


export const putTeacherSchema: FastifySchema = {
  description: "Update an existing Teacher",
  tags: ["Teacher"],
  summary: "Updates Teacher details",
  params: TeacherParams,
  body: Type.Partial(TeacherPayload), 
  response: {
    200: { ...TeacherResponse, description: "Updated successfully" },
    404: { ...teacherNotFoundSchema, description: "Not found" },
  },
};


export const deleteTeacherSchema: FastifySchema = {
  description: "Delete a Teacher",
  tags: ["Teacher"],
  summary: "Deletes a teacher by ID",
  params: TeacherParams,
  response: {
    204: { description: "Deleted successfully", type: "null" }, 
    404: { ...teacherNotFoundSchema, description: "Not found" },
  },
};

export type TeacherParamsType = Static<typeof TeacherParams>;
