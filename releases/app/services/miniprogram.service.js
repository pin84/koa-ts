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
exports.MiniprogramService = void 0;
var typedi_1 = require("typedi");
var client_1 = __importDefault(require("../helpers/client"));
var redisConnection_1 = __importDefault(require("../../redis/redisConnection"));
var message_1 = __importDefault(require("../helpers/message"));
var jwt_1 = __importDefault(require("../helpers/jwt"));
var MiniprogramService = (function () {
    function MiniprogramService() {
    }
    MiniprogramService.prototype.delArtile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.deleteById(Number(id))];
                    case 1:
                        _a.sent();
                        return [2, message_1["default"].success('删除成功')];
                }
            });
        });
    };
    MiniprogramService.prototype.getArticle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.findArticle()];
                    case 1:
                        list = _a.sent();
                        return [2, list];
                }
            });
        });
    };
    MiniprogramService.prototype.createArticle = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            var title, time, htmlStr, coverURL, subtitle, id, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = content.title, time = content.time, htmlStr = content.htmlStr, coverURL = content.coverURL, subtitle = content.subtitle, id = content.id;
                        console.log(title, time, htmlStr, coverURL, subtitle, id);
                        if (!!id) return [3, 2];
                        return [4, client_1["default"].fg_article.create({
                                data: {
                                    title: title,
                                    time: String(time),
                                    content: htmlStr,
                                    coverURL: coverURL,
                                    subtitle: subtitle
                                }
                            })];
                    case 1:
                        res = _a.sent();
                        console.log('====create===', res);
                        return [3, 4];
                    case 2: return [4, client_1["default"].fg_article.update({
                            where: {
                                id: Number(id)
                            },
                            data: {
                                title: title,
                                time: String(time),
                                content: htmlStr,
                                coverURL: coverURL,
                                subtitle: subtitle
                            }
                        })];
                    case 3:
                        res = _a.sent();
                        console.log('====update===', res);
                        _a.label = 4;
                    case 4:
                        console.log('====aaaaa===', res);
                        return [2, res];
                }
            });
        });
    };
    MiniprogramService.prototype.getDesigner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].fg_user.findMany({
                            where: {
                                isDesigner: 5
                            },
                            select: this.findSelect()
                        })];
                    case 1:
                        list = _a.sent();
                        return [2, list];
                }
            });
        });
    };
    MiniprogramService.prototype.create = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var session_key, openid, unionid, user, timestamp, token, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session_key = session.session_key, openid = session.openid, unionid = session.unionid;
                        return [4, this.findUser(openid)];
                    case 1:
                        user = _a.sent();
                        timestamp = new Date().getTime();
                        token = timestamp.toString(32) + Math.random().toString(16).slice(2);
                        return [4, redisConnection_1["default"].set(token, openid, 'EX', 24 * 60 * 60)];
                    case 2:
                        _a.sent();
                        obj = Object.assign({}, user, { token: token });
                        if (user)
                            return [2, obj];
                        return [4, client_1["default"].fg_user.create({
                                data: {
                                    sessionKey: session_key,
                                    openid: openid,
                                    unionid: unionid,
                                    token: token
                                }
                            })];
                    case 3:
                        _a.sent();
                        return [2, obj];
                }
            });
        });
    };
    MiniprogramService.prototype.getUserinfo = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var openid, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, redisConnection_1["default"].get(token)];
                    case 1:
                        openid = _a.sent();
                        if (!openid) {
                            return [2, message_1["default"].fail('登录已过期，请刷新页面')];
                        }
                        return [4, this.findUser(openid)];
                    case 2:
                        user = _a.sent();
                        return [2, message_1["default"].success(user)];
                }
            });
        });
    };
    MiniprogramService.prototype.updateUser = function (userinfo) {
        return __awaiter(this, void 0, void 0, function () {
            var username, phone, token, code, isHasCode, updateUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = userinfo.username, phone = userinfo.phone, token = userinfo.token, code = userinfo.code;
                        return [4, redisConnection_1["default"].get(phone)];
                    case 1:
                        isHasCode = _a.sent();
                        if (!isHasCode) {
                            return [2, message_1["default"].fail('验证码已过期，请重新发送')];
                        }
                        return [4, client_1["default"].fg_user.updateMany({
                                where: {
                                    token: token
                                },
                                data: {
                                    username: username,
                                    phone: phone
                                }
                            })];
                    case 2:
                        updateUsers = _a.sent();
                        return [2, message_1["default"].success(updateUsers)];
                }
            });
        });
    };
    MiniprogramService.prototype.applyDesigner = function (token, phone, username) {
        return __awaiter(this, void 0, void 0, function () {
            var openid, user, isDesigner, updateUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, redisConnection_1["default"].get(token)];
                    case 1:
                        openid = _a.sent();
                        if (!openid) {
                            return [2, message_1["default"].fail('登录已过期，请刷新页面')];
                        }
                        return [4, this.findUser(openid)];
                    case 2:
                        user = _a.sent();
                        if (!user) {
                            return [2, message_1["default"].fail('用户不存在')];
                        }
                        isDesigner = user.isDesigner;
                        if (isDesigner == 4) {
                            return [2, message_1["default"].fail('正在审核中，请耐心等待')];
                        }
                        if (isDesigner == 5) {
                            return [2, message_1["default"].fail('您已经是设计师，不能重复申请')];
                        }
                        return [4, client_1["default"].fg_user.updateMany({
                                where: {
                                    openid: openid
                                },
                                data: {
                                    isDesigner: 4,
                                    phone: phone,
                                    username: username
                                }
                            })];
                    case 3:
                        updateUsers = _a.sent();
                        return [2, message_1["default"].success('申请成功，请等待审核')];
                }
            });
        });
    };
    MiniprogramService.prototype.adminDesigner = function (openid) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isDesigner, updateUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.findUser(openid)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2, message_1["default"].fail('用户不存在')];
                        }
                        isDesigner = user.isDesigner;
                        if (isDesigner == 5) {
                            return [2, message_1["default"].fail('用户已经是设计师')];
                        }
                        return [4, client_1["default"].fg_user.updateMany({
                                where: {
                                    openid: openid
                                },
                                data: {
                                    isDesigner: 5
                                }
                            })];
                    case 2:
                        updateUsers = _a.sent();
                        return [2, message_1["default"].success('申请成功，请等待审核')];
                }
            });
        });
    };
    MiniprogramService.prototype.findUser = function (openid) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].fg_user.findUnique({
                            where: {
                                openid: openid
                            },
                            select: this.findSelect()
                        })];
                    case 1:
                        user = _a.sent();
                        return [2, user];
                }
            });
        });
    };
    MiniprogramService.prototype.findUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].fg_user.findMany({
                            where: {
                                isDesigner: 4
                            },
                            select: this.findSelect()
                        })];
                    case 1:
                        user = _a.sent();
                        return [2, user];
                }
            });
        });
    };
    MiniprogramService.prototype.findSelect = function () {
        var obj = {
            id: true,
            isDesigner: true,
            token: true,
            username: true,
            phone: true,
            isAdmin: true
        };
        return obj;
    };
    MiniprogramService.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].fg_article["delete"]({
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    MiniprogramService.prototype.getOpenid = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var openid;
            return __generator(this, function (_a) {
                openid = redisConnection_1["default"].get(token);
                if (!openid) {
                    return [2, message_1["default"].fail('登录已过期，请刷页面')];
                }
                return [2, openid];
            });
        });
    };
    MiniprogramService.prototype.findArticle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, client_1["default"].fg_article.findMany({
                            skip: 0,
                            take: 999
                        })];
                    case 1:
                        list = _a.sent();
                        return [2, list];
                }
            });
        });
    };
    MiniprogramService = __decorate([
        typedi_1.Service()
    ], MiniprogramService);
    return MiniprogramService;
}());
exports.MiniprogramService = MiniprogramService;
