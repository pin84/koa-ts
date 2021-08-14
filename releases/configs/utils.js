"use strict";
exports.__esModule = true;
exports.sha1 = exports.print = exports.dictToArray = void 0;
var crypto = require('crypto');
var dictToArray = function (dict) {
    return Object.keys(dict).map(function (name) { return dict[name]; });
};
exports.dictToArray = dictToArray;
exports.print = {
    log: function (text) { return console.log('\x1b[37m%s \x1b[2m%s\x1b[0m', '>', text); },
    danger: function (text) { return console.log('\x1b[31m%s \x1b[31m%s\x1b[0m', '>', text); },
    tip: function (text) { return console.log('\x1b[36m%s \x1b[36m%s\x1b[0m', '>', text); }
};
var sha1 = function (str) {
    var shasum = crypto.createHash("sha1");
    return shasum.update(str, 'utf-8').digest("hex");
};
exports.sha1 = sha1;
