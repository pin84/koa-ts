"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useMiddlewares = void 0;
var koa_logger_1 = __importDefault(require("koa-logger"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var environments_1 = __importDefault(require("./environments"));
var useMiddlewares = function (app) {
    environments_1["default"].identity !== 'test' && app.use(koa_logger_1["default"]());
    app.use(koa_bodyparser_1["default"]());
    return app;
};
exports.useMiddlewares = useMiddlewares;
