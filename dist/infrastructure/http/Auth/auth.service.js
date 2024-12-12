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
exports.AuthService = void 0;
const user_repo_1 = require("@infrastructure/http/Auth/user.repo");
class AuthService {
    static register(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield user_repo_1.UserRepository.getUserByUsername(username);
            if (existingUser) {
                throw new Error('Username already taken');
            }
            return yield user_repo_1.UserRepository.createUser({ username, password });
        });
    }
    static login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repo_1.UserRepository.getUserByUsername(username);
            if (!user || user.user.password !== password) {
                throw new Error('Invalid credentials');
            }
            return user.token;
        });
    }
}
exports.AuthService = AuthService;
