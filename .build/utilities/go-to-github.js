"use strict";
var parse = require('parse-git-config');
var child = require('child_process').execFile;
var executablePath = process.argv[2];
var gitUrl = parse.sync()['remote "origin"']['url'];
var sanitizedUrl = gitUrl.substring(0, gitUrl.length - 4);
child(executablePath, [sanitizedUrl], function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
});
