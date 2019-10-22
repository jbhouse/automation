"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openPR = function (executablePath, pullRequestUrl, fn) {
    require('child_process').exec('git branch', function (err, stdout) {
        pullRequestUrl += "\\pull\\new\\" + stdout.split('*')[1].split('\n')[0].trim();
        fn(executablePath, pullRequestUrl);
    });
};
