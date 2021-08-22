"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var ioredis_1 = __importDefault(require("ioredis"));
var utils_1 = require("../configs/utils");
var config_1 = require("../configs/config");
var port = config_1.getRedisConfig.port, host = config_1.getRedisConfig.host, db = config_1.getRedisConfig.db, family = config_1.getRedisConfig.family;
var config = {
    port: port,
    host: host,
    family: family,
    db: db
};
var redis = new ioredis_1["default"](config);
redis.on('connect', function () {
    var ts = new Date().getTime();
    console.log("at " + ts + " ,redis connet success");
});
redis.on('error', function (err) {
    utils_1.print.danger('The Redis Can not Connect:');
});
exports["default"] = redis;
