"use strict";
exports.__esModule = true;
exports.getRedisConfig = exports.wx = void 0;
var wx = {
    token: 'lzhstop',
    AppID: 'wxce4a169091306766',
    AppSecret: 'ab5a13e12bed6d62ca644fe7bcc5d870',
    buttomobj: {
        "button": [
            {
                "type": "view",
                "name": "汉水软件",
                "url": "http://wx.lzhs.top"
            },
            {
                "name": "小工具",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "转成二维码",
                        "url": "http://wx.lzhs.top/#/qrcode"
                    },
                    {
                        "type": "click",
                        "name": "赞一下我们",
                        "key": "V1001_GOOD"
                    }
                ]
            }
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
