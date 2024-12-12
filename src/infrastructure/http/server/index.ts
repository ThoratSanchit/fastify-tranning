import fastify, {
  type FastifyInstance,
  type FastifyServerOptions,
} from "fastify";
import { type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import routes from "@infrastructure/http/routes/index";
import cors from "@fastify/cors";
import docs from "@infrastructure/http/plugins/docs";
import config from "@infrastructure/http/plugins/config";
import sequelize from "@infrastructure/database/index";
import fastifyJwt from "@fastify/jwt";
import { StudentRepository } from "@infrastructure/repositories/student.repo";
import {defineAssociations} from "@infrastructure/http/middleware/association";


import { TeacherRepositoryImpl } from "@infrastructure/repositories/teacher.repo";
import { authRoutes } from "../Auth/user.routes";


export const createServer = async (): Promise<FastifyInstance> => {
  const envToLogger: any = {
    development: {
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
        },
      },
    },
    production: true,
    test: false,
  };

  const environment = process.env.NODE_ENV ?? "production";
  await sequelize.sync();
  defineAssociations();
  const serverOptions: FastifyServerOptions = {
    ajv: {
      customOptions: {
        removeAdditional: "all",
        coerceTypes: true,
        useDefaults: true,
        keywords: ["kind", "modifier"],
      },
    },
    logger: envToLogger[environment] ?? true,
  };
  const server = fastify(serverOptions).withTypeProvider<TypeBoxTypeProvider>();

  // const server = fastify();

  server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  server.get("/", async (request, reply) => {
    reply.send({ message: "Welcome to the TEAI service" });
  });

  await server.register(docs);
  await server.register(config);
  server.register(fastifyJwt, {
    secret: "your_jwt_secret_key", 
});
await authRoutes(server);

  const studentRepository = new StudentRepository();

  const teacherRepositoryImpl = new TeacherRepositoryImpl();
 

  const applicationRoutes = routes(
    studentRepository,
    teacherRepositoryImpl,

  );
  applicationRoutes.forEach((route) => {
    server.route(route);
  });

  await server.ready();
  return server;
};
