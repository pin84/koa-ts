"use strict";
exports.__esModule = true;
exports.getRedisConfig = exports.wx = void 0;
var wx = {
    token: 'lzhstop',
    AppID: 'wxce4a169091306766',
    AppSecret: 'ab5a13e12bed6d62ca644fe7bcc5d870'
};
exports.wx = wx;
var getRedisConfig = {
    port: 6379,
    host: '127.0.0.1',
    password: 'auth',
    family: 4,
    db: 0
};
exports.getRedisConfig = getRedisConfig;
