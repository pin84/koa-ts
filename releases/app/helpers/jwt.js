"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SIGN_KEY = 'abc';
var Jwt = (function () {
    function Jwt() {
    }
    Jwt.prototype.getToken = function (userData, expiresIn) {
        if (expiresIn === void 0) { expiresIn = 600; }
        var str = jsonwebtoken_1["default"].sign(userData, SIGN_KEY, { expiresIn: expiresIn });
        return str;
    };
    Jwt.prototype.verify = function (token) {
        try {
            var res = jsonwebtoken_1["default"].verify(token, SIGN_KEY);
            return res;
        }
        catch (error) {
            return { code: -1, message: 'token已过期' };
        }
    };
    return Jwt;
}());
exports["default"] = new Jwt();
