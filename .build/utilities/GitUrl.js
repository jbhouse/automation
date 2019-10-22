"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function () {
    var parse = require('parse-git-config');
    return {
        gitUrl: function () {
            var gitUrl = parse.sync()['remote "origin"']['url'];
            return gitUrl.substring(0, gitUrl.length - 4);
        }
    };
};
