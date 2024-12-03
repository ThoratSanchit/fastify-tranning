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
exports.NodeEnv = void 0;
require("dotenv/config");
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const typebox_1 = require("@sinclair/typebox");
const ajv_1 = __importDefault(require("ajv"));
var NodeEnv;
(function (NodeEnv) {
    NodeEnv["development"] = "development";
    NodeEnv["test"] = "test";
    NodeEnv["production"] = "production";
})(NodeEnv || (exports.NodeEnv = NodeEnv = {}));
const ConfigSchema = typebox_1.Type.Strict(typebox_1.Type.Object({
    NODE_ENV: typebox_1.Type.Enum(NodeEnv),
    LOG_LEVEL: typebox_1.Type.String(),
    API_HOST: typebox_1.Type.String(),
    API_PORT: typebox_1.Type.Number(),
}));
const ajv = new ajv_1.default({
    allErrors: true,
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true,
    allowUnionTypes: true
});
const configPlugin = (server) => __awaiter(void 0, void 0, void 0, function* () {
    const validate = ajv.compile(ConfigSchema);
    const valid = validate(process.env);
    if (!valid) {
        throw new Error('.env file validation failed - ' +
            JSON.stringify(validate.errors, null, 2));
    }
    // server.decorate('config',  process.env)
    // server.decorate('config', process.env as Config)
    server.decorate('config', {
        NODE_ENV: process.env.NODE_ENV,
        LOG_LEVEL: process.env.LOG_LEVEL,
        API_HOST: process.env.API_HOST,
        API_PORT: Number(process.env.API_PORT),
    });
});
exports.default = (0, fastify_plugin_1.default)(configPlugin);
