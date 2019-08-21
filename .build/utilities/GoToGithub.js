"use strict";
var parse = require('parse-git-config');
var child = require('child_process').execFile;
var gitUrl = parse.sync()['remote "origin"']['url'];
var sanitizedUrl = gitUrl.substring(0, gitUrl.length - 4);
module.exports = {
    goToGithub: function (executablePath) { return child(executablePath, [sanitizedUrl], function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
    }); }
};
