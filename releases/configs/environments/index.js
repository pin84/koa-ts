"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bootstrap = __importStar(require("../bootstrap"));
var development_1 = __importDefault(require("./development"));
var production_1 = __importDefault(require("./production"));
var parsedEnvs = bootstrap.before();
var isProd = process.env.NODE_ENV === 'production';
var env = isProd ? production_1["default"] : development_1["default"];
Object.keys(env).forEach(function (key) {
    env[key] = process.env[key] || env[key];
});
Object.keys(parsedEnvs || {}).forEach(function (key) {
    env[key] = parsedEnvs[key];
});
var Environment = env;
exports["default"] = Environment;
