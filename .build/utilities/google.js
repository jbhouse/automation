"use strict";
var child = require('child_process').execFile;
module.exports = {
    searchGoogle: (executablePath, url) => child(executablePath, [url], function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
    })
};
