"use strict";
exports.__esModule = true;
var Message = (function () {
    function Message() {
    }
    Message.prototype.success = function (data) {
        return {
            code: 0,
            data: data
        };
    };
    Message.prototype.fail = function (message, code) {
        if (code === void 0) { code = -1; }
        return {
            code: code,
            message: message
        };
    };
    return Message;
}());
exports["default"] = new Message();
