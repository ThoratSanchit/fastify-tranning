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
exports.authRoutes = void 0;
const user_controller_1 = require("./user.controller");
const user_schema_1 = require("./user.schema");
const authRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.post('/login', { schema: user_schema_1.loginSchema }, user_controller_1.loginController);
    app.post('/register', { schema: user_schema_1.registerSchema }, user_controller_1.registerController);
});
exports.authRoutes = authRoutes;
