"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var multer_1 = __importDefault(require("multer"));
var fileUploadOptions = function () {
    storage: multer_1["default"].diskStorage({
        destination: function (req, file, cb) {
            console.log(req, file, cb);
        },
        filename: function (req, file, cb) {
            console.log('------', req, file, cb);
        }
    });
    return 'aa';
};
exports["default"] = {
    fileUploadOptions: fileUploadOptions
};
