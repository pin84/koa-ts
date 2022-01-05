"use strict";
exports.__esModule = true;
exports.miniprogramConfig = exports.baseURL = exports.miniprogramSetPath = exports.setPath = exports.getRedisConfig = exports.wx = void 0;
var wx = {
    token: 'lzhstop',
    AppID: 'wxce4a169091306766',
    AppSecret: 'ab5a13e12bed6d62ca644fe7bcc5d870',
    buttomobj: {
        "button": [
            {
                "type": "view",
                "name": "转成二维码",
                "url": "http://wx.lzhs.top/#/qrcode"
            },
            {
                "type": "view",
                "name": "赞一下我们",
                "url": "http://wx.lzhs.top/#/donate"
            },
        ]
    }
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
var setPath = function () {
    console.log('======ENV===', process.env.NODE_ENV);
    var path = '';
    var env = process.env.NODE_ENV;
    if (env == 'development') {
        path = '/users/upload';
    }
    else {
        path = '/usr/myapp/upload';
    }
    return path;
};
exports.setPath = setPath;
var miniprogramSetPath = function () {
    console.log('======ENV===', process.env.NODE_ENV);
    var path = '';
    var env = process.env.NODE_ENV;
    if (env == 'development') {
        path = '/users/miniprogramUpload';
    }
    else {
        path = '/usr/myapp/miniprogramUpload';
    }
    return path;
};
exports.miniprogramSetPath = miniprogramSetPath;
var miniprogramConfig = {
    appid: 'wxd32fdaef18b611d9',
    secret: '6cc4bf8f1ebf884c55154c29810b8a04'
};
exports.miniprogramConfig = miniprogramConfig;
var baseURL = 'http://static.lzhs.top/upload';
exports.baseURL = baseURL;
