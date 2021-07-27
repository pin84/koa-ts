"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.after = exports.before = void 0;
var path_1 = require("path");
var utils_1 = require("./utils");
var dotenv_1 = __importDefault(require("dotenv"));
var before = function () {
    var result = dotenv_1["default"].config({ path: path_1.join(__dirname, '../.env') });
    if (result.error) {
        utils_1.print.danger('Environment variable not loaded: not found ".env".');
        return {};
    }
    utils_1.print.log('.env loaded.');
    return result.parsed;
};
exports.before = before;
var after = function () { };
exports.after = after;
