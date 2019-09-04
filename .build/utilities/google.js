"use strict";
var child = require('child_process').execFile;
module.exports = {
    searchGoogle: function (executablePath, url) {
        return child(executablePath, [url], function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
};
