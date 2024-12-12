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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const auth_service_1 = require("./auth.service");
const registerController = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = request.body;
    try {
        const token = yield auth_service_1.AuthService.register(username, password);
        reply.send({ message: 'User registered successfully' });
    }
    catch (error) {
        const errorMessage = error instanceof Error
            ? error.message // If the error is an instance of Error
            : 'An unexpected error occurred';
        reply.code(400).send({ message: errorMessage });
    }
});
exports.registerController = registerController;
const loginController = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = request.body;
    try {
        const token = yield auth_service_1.AuthService.login(username, password);
        reply.send({ token });
    }
    catch (error) {
        reply.code(401).send({ message: error });
    }
});
exports.loginController = loginController;
