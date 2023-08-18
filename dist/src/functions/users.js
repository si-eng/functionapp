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
exports.users = void 0;
const functions_1 = require("@azure/functions");
const db_connect_1 = require("../db_connection/db_connect");
const User_1 = require("../models/User");
function users(request, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelizeConnection = (0, db_connect_1.default)([User_1.default]);
        try {
            yield sequelizeConnection.authenticate();
            const users = yield User_1.default.findAll();
            return {
                status: 200,
                body: JSON.stringify(users)
            };
        }
        catch (error) {
            return { body: error };
        }
    });
}
exports.users = users;
;
functions_1.app.http('users', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: users
});
//# sourceMappingURL=users.js.map