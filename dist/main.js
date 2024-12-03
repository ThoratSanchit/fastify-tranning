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
require('module-alias/register');
const server_1 = require("@infrastructure/http/server");
const database_1 = require("@infrastructure/database");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = yield (0, server_1.createServer)();
    const { API_PORT: port, API_HOST: host } = server.config;
    yield (0, database_1.initDB)();
    // await sequelize.sync({force: true})
    yield server.listen({ host, port });
    process.on('unhandledRejection', (err) => {
        console.error(err);
        process.exit(1);
    });
    for (const signal of ['SIGINT', 'SIGTERM']) {
        process.on(signal, () => {
            console.log(`closing application on ${signal}`);
            server.close()
                .then(() => process.exit(0))
                .catch(() => process.exit(1));
        });
    }
});
void main();
