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
exports.UserRepository = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("@infrastructure/http/Auth/user.model");
class UserRepository {
    static getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ where: { username } });
            if (!user)
                return null;
            const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, 'your_jwt_secret_key', {
                expiresIn: '1h',
            });
            return { user, token };
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield user_model_1.User.create(user);
            const token = jsonwebtoken_1.default.sign({ id: newUser.id, username: newUser.username }, 'your_jwt_secret_key', {
                expiresIn: '1h',
            });
            return token;
        });
    }
}
exports.UserRepository = UserRepository;
