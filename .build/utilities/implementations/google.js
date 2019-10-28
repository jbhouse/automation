"use strict";
module.exports = {
    searchGoogle: (executablePath, url) => require('child_process').execFile(executablePath, [url], function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
    })
};
