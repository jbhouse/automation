"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function () {
    var child = require('child_process').execFile;
    return {
        searchGoogle: function (executablePath, url) {
            return child(executablePath, [url], function (err, data) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        }
    };
};
