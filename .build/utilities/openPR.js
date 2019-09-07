"use strict";
var google = require('./google');
module.exports = {
    openPR: (executablePath, pullRequestUrl) => {
        require('child_process').exec('git branch', function (err, stdout) {
            pullRequestUrl += "\\pull\\new\\" + stdout.split('*')[1].split('\n')[0].trim();
            google.searchGoogle(executablePath, pullRequestUrl);
        });
    }
};
