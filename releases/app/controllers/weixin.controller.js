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
exports.WeixinController = void 0;
var routing_controllers_1 = require("routing-controllers");
var services_1 = require("../services");
var typedi_1 = require("typedi");
var message_1 = __importDefault(require("../helpers/message"));
var utils_1 = require("../../configs/utils");
var wxSign_1 = require("../../wx/wxSign");
var redisConnection_1 = __importDefault(require("../../redis/redisConnection"));
var raw_body_1 = __importDefault(require("raw-body"));
var WeixinController = (function () {
    function WeixinController(AthenaService) {
        this.AthenaService = AthenaService;
    }
    WeixinController.prototype.tokenVerify = function (signature, nonce, timestamp, echostr) {
        var token = 'lzhstop';
        var str = [token, timestamp, nonce].sort().join('');
        var sha = utils_1.sha1(str);
        if (sha == signature) {
            console.log('===true===', echostr);
            return echostr;
        }
        else {
            return 'wrong';
        }
    };
    WeixinController.prototype.test = function (Content) {
        return __awaiter(this, void 0, void 0, function () {
            var bb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, raw_body_1["default"](Content.req, {
                            encoding: 'utf-8'
                        })];
                    case 1:
                        bb = _a.sent();
                        console.log('--ssdf--', bb);
                        return [2, 'hello world ! '];
                }
            });
        });
    };
    WeixinController.prototype.sign = function (signUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, wxSign_1.sign(signUrl)];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Get('/wx/'),
        __param(0, routing_controllers_1.QueryParam('signature')),
        __param(1, routing_controllers_1.QueryParam('nonce')),
        __param(2, routing_controllers_1.QueryParam('timestamp')),
        __param(3, routing_controllers_1.QueryParam('echostr')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String,
            Number,
            Number, String]),
        __metadata("design:returntype", void 0)
    ], WeixinController.prototype, "tokenVerify");
    __decorate([
        routing_controllers_1.Post('/wx/'),
        __param(0, routing_controllers_1.Ctx()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WeixinController.prototype, "test");
    __decorate([
        routing_controllers_1.Get('/wx/sign'),
        __param(0, routing_controllers_1.QueryParam('signUrl')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], WeixinController.prototype, "sign");
    WeixinController = __decorate([
        routing_controllers_1.Controller(),
        typedi_1.Service(),
        __metadata("design:paramtypes", [services_1.AthenaService])
    ], WeixinController);
    return WeixinController;
}());
exports.WeixinController = WeixinController;
