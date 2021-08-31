"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var config_1 = require("../../configs/config");
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        var path = config_1.setPath();
        cb(null, path);
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        var mimetype = file.mimetype, originalname = file.originalname;
        var ts = new Date().getTime() + '';
        var type = mimetype.split('/')[1];
        cb(null, ts + '.' + type);
    }
});
var limits = {
    fieldNameSize: 255,
    fileSize: 1024 * 1024 * 20
};
exports.upload = multer_1["default"]({ storage: storage, limits: limits });
