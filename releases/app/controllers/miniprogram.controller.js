"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.miniprogramController = void 0;
var routing_controllers_1 = require("routing-controllers");
var services_1 = require("../services");
var typedi_1 = require("typedi");
var message_1 = __importDefault(require("../helpers/message"));
var redisConnection_1 = __importDefault(require("../../redis/redisConnection"));
var axios_1 = __importDefault(require("axios"));
var getAccessToken_1 = __importDefault(require("../../wx/getAccessToken"));
var config_1 = require("../../configs/config");
var miniprogram_1 = require("../helpers/miniprogram");
var config_2 = require("../../configs/config");
var miniprogramController = (function () {
    function miniprogramController(MiniprogramService) {
        this.MiniprogramService = MiniprogramService;
    }
    miniprogramController.prototype.delArtile = function (token, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.MiniprogramService.delArtile(id)];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    miniprogramController.prototype.getArtile = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(token);
                        return [4, this.MiniprogramService.getArticle()];
                    case 1:
                        res = _a.sent();
                        return [2, message_1["default"].success(res)];
                }
            });
        });
    };
    miniprogramController.prototype.adminUploadArticle = function (file, content) {
        return __awaiter(this, void 0, void 0, function () {
            var filename, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(content);
                        filename = file.filename;
                        url = config_1.baseURLMiniProgram + '/' + filename;
                        return [4, this.MiniprogramService.createArticle(Object.assign({}, { coverURL: url }, content))];
                    case 1:
                        _a.sent();
                        return [2, message_1["default"].success('上传成功')];
                }
            });
        });
    };
    miniprogramController.prototype.getDesigner = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.MiniprogramService.getDesigner()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    miniprogramController.prototype.sendSms = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = Math.random().toString().slice(2, 6);
                        console.log(code);
                        return [4, redisConnection_1["default"].set(phone, code, 'EX', 10 * 60)];
                    case 1:
                        _a.sent();
                        return [2, message_1["default"].success(code)];
                }
            });
        });
    };
    miniprogramController.prototype.uploadImg = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var filename, url;
            return __generator(this, function (_a) {
                filename = file.filename;
                url = config_1.baseURLMiniProgram + '/' + filename;
                console.log('--upload---- file--', file);
                return [2, message_1["default"].success(url)];
            });
        });
    };
    miniprogramController.prototype.code2Session = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var appid, secret, url, res, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appid = config_2.miniprogramConfig.appid, secret = config_2.miniprogramConfig.secret;
                        url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code";
                        return [4, axios_1["default"].get(url)];
                    case 1:
                        res = _a.sent();
                        return [4, this.MiniprogramService.create(res.data)];
                    case 2:
                        user = _a.sent();
                        return [2, message_1["default"].success(user)];
                }
            });
        });
    };
    miniprogramController.prototype.getUserInfo = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.MiniprogramService.getUserinfo(token)];
                    case 1:
                        user = _a.sent();
                        return [2, user];
                }
            });
        });
    };
    miniprogramController.prototype.update = function (Content) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, _b, key, value, res;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        for (_i = 0, _a = Object.entries(Content); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], value = _b[1];
                            if (value == '') {
                                return [2, message_1["default"].fail('信息不完整')];
                                break;
                            }
                        }
                        return [4, this.MiniprogramService.updateUser(Content)];
                    case 1:
                        res = _c.sent();
                        console.log('--ssdf--', res);
                        return [2, res];
                }
            });
        });
    };
    miniprogramController.prototype.applyDesigner = function (Content) {
        return __awaiter(this, void 0, void 0, function () {
            var phone, username, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phone = Content.phone, username = Content.username, token = Content.token;
                        return [4, this.MiniprogramService.applyDesigner(token, phone, username)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    miniprogramController.prototype.adminDesigner = function (openid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(openid);
                        return [4, this.MiniprogramService.adminDesigner(openid)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Get('/fg/delArticle'),
        __param(0, routing_controllers_1.QueryParam('token')),
        __param(1, routing_controllers_1.QueryParam('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "delArtile");
    __decorate([
        routing_controllers_1.Get('/fg/getArticle'),
        __param(0, routing_controllers_1.QueryParam('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "getArtile");
    __decorate([
        routing_controllers_1.Post('/fg/uplod/article'),
        __param(0, routing_controllers_1.UploadedFile('fileName', { options: miniprogram_1.miniprogram })),
        __param(1, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "adminUploadArticle");
    __decorate([
        routing_controllers_1.Get('/fg/getDesigner'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "getDesigner");
    __decorate([
        routing_controllers_1.Get('/fg/sms'),
        __param(0, routing_controllers_1.QueryParam('phone')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "sendSms");
    __decorate([
        routing_controllers_1.Post('/mini/upload'),
        __param(0, routing_controllers_1.UploadedFile('fileName', { options: miniprogram_1.miniprogram })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "uploadImg");
    __decorate([
        routing_controllers_1.Get('/mini/code2Session'),
        __param(0, routing_controllers_1.QueryParam('code')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "code2Session");
    __decorate([
        routing_controllers_1.Get('/fg/getuser'),
        __param(0, routing_controllers_1.QueryParam('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "getUserInfo");
    __decorate([
        routing_controllers_1.Post('/fg/updateUser'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "update");
    __decorate([
        routing_controllers_1.Post('/fg/apply/designer'),
        __param(0, routing_controllers_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "applyDesigner");
    __decorate([
        routing_controllers_1.Get('/fg/admin/designer'),
        __param(0, routing_controllers_1.QueryParam('openid')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], miniprogramController.prototype, "adminDesigner");
    miniprogramController = __decorate([
        routing_controllers_1.Controller(),
        typedi_1.Service(),
        __metadata("design:paramtypes", [services_1.MiniprogramService])
    ], miniprogramController);
    return miniprogramController;
}());
exports.miniprogramController = miniprogramController;
