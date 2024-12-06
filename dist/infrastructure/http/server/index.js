"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const index_1 = __importDefault(require("@infrastructure/http/routes/index"));
const cors_1 = __importDefault(require("@fastify/cors"));
const docs_1 = __importDefault(require("@infrastructure/http/plugins/docs"));
const config_1 = __importDefault(require("@infrastructure/http/plugins/config"));
const index_2 = __importDefault(require("@infrastructure/database/index"));
const student_repo_1 = require("@infrastructure/repositories/student.repo");
const association_1 = require("@infrastructure/http/middleware/association");
const teacher_repo_1 = require("@infrastructure/repositories/teacher.repo");
const createServer = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const envToLogger = {
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
    const environment = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "production";
    yield index_2.default.sync();
    (0, association_1.defineAssociations)();
    const serverOptions = {
        ajv: {
            customOptions: {
                removeAdditional: "all",
                coerceTypes: true,
                useDefaults: true,
                keywords: ["kind", "modifier"],
            },
        },
        logger: (_b = envToLogger[environment]) !== null && _b !== void 0 ? _b : true,
    };
    const server = (0, fastify_1.default)(serverOptions).withTypeProvider();
    // const server = fastify();
    server.register(cors_1.default, {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    });
    server.get("/", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        reply.send({ message: "Welcome to the TEAI service" });
    }));
    yield server.register(docs_1.default);
    yield server.register(config_1.default);
    const studentRepository = new student_repo_1.StudentRepository();
    const teacherRepositoryImpl = new teacher_repo_1.TeacherRepositoryImpl();
    const applicationRoutes = (0, index_1.default)(studentRepository, teacherRepositoryImpl);
    applicationRoutes.forEach((route) => {
        server.route(route);
    });
    yield server.ready();
    return server;
});
exports.createServer = createServer;
