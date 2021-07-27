"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AthenaService = void 0;
var typedi_1 = require("typedi");
var client_1 = __importDefault(require("../helpers/client"));
var message_1 = __importDefault(require("../helpers/message"));
var jwt_1 = __importDefault(require("../helpers/jwt"));
var AthenaService = (function () {
    function AthenaService() {
    }
    AthenaService.prototype.getUserinfo = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var res, name, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = jwt_1["default"].verify(token);
                        if (res.code == -1) {
                            return [2, message_1["default"].fail('token已过期')];
                        }
                        name = res.name;
                        return [4, client_1["default"].user.findUnique({
                                where: {
                                    name: name
                                }
                            })];
                    case 1:
                        user = _a.sent();
                        return [2, message_1["default"].success(user)];
                }
            });
        });
    };
    AthenaService.prototype.getMsg = function (size, pageIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].message.findMany({
                            skip: size * pageIndex,
                            take: size,
                            orderBy: {
                                id: 'desc'
                            }
                        })];
                    case 1:
                        list = _a.sent();
                        list.forEach(function (item) {
                            if (item.isSecret) {
                                item.content = '这是悄悄话。。。只有管理员才看到到～～';
                            }
                        });
                        return [2, list];
                }
            });
        });
    };
    AthenaService.prototype.searchmsg = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].message.findMany({
                            where: {
                                content: {
                                    contains: keyword
                                }
                            }
                        })];
                    case 1:
                        list = _a.sent();
                        return [2, message_1["default"].success(list)];
                }
            });
        });
    };
    AthenaService.prototype.getMsgCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].message.findMany()];
                    case 1:
                        list = _a.sent();
                        len = list.length;
                        return [2, len];
                }
            });
        });
    };
    AthenaService.prototype.login = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var name, pwd, user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = session.name, pwd = session.pwd;
                        return [4, client_1["default"].user.findUnique({
                                where: {
                                    name: name
                                }
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2, message_1["default"].fail('用户不存在或密码错误')];
                        }
                        if (pwd == user.pwd) {
                            token = jwt_1["default"].getToken(user);
                            return [2, message_1["default"].success({ user: user, token: token })];
                        }
                        else {
                            return [2, message_1["default"].fail('用户不存在或密码错误')];
                        }
                        return [2];
                }
            });
        });
    };
    AthenaService.prototype.creatUser = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var name, pwd, user, register, token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = session.name, pwd = session.pwd;
                        return [4, client_1["default"].user.findUnique({
                                where: {
                                    name: name
                                }
                            })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2, message_1["default"].fail('注册失败，用户名已存在')];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, client_1["default"].user.create({
                                data: {
                                    pwd: pwd,
                                    name: name
                                }
                            })];
                    case 3:
                        register = _a.sent();
                        token = jwt_1["default"].getToken({ register: register });
                        return [2, message_1["default"].success({ token: token, user: register })];
                    case 4:
                        error_1 = _a.sent();
                        return [2, message_1["default"].fail('注册失败')];
                    case 5: return [2];
                }
            });
        });
    };
    AthenaService.prototype.creatMsg = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var token, isSecret, avatar, msg, title, username, id, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = session.token, isSecret = session.isSecret, avatar = session.avatar, msg = session.msg, title = session.title, username = session.username;
                        id = jwt_1["default"].verify(token).id;
                        return [4, client_1["default"].message.create({
                                data: {
                                    userid: id,
                                    title: title,
                                    username: username,
                                    isSecret: isSecret ? 1 : 0,
                                    content: msg,
                                    avatar: avatar
                                }
                            })];
                    case 1:
                        res = _a.sent();
                        return [2, message_1["default"].success(res)];
                }
            });
        });
    };
    AthenaService.prototype.testToken = function (token) {
        var res = jwt_1["default"].verify(token);
        console.log('--token-', token);
    };
    AthenaService = __decorate([
        typedi_1.Service()
    ], AthenaService);
    return AthenaService;
}());
exports.AthenaService = AthenaService;
