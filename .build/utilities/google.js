"use strict";
module.exports = (() => {
    const child = require('child_process').execFile;
    return {
        searchGoogle: (executablePath, url) => child(executablePath, [url], function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
        })
    };
})();
