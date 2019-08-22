"use strict";
var parse = require('parse-git-config');
var child = require('child_process').execFile;
var git = require('simple-git');
var gitUrl = parse.sync()['remote "origin"']['url'];
var pullRequestUrl = gitUrl.substring(0, gitUrl.length - 4) + "\\pull\\new\\";
module.exports = {
    openPR: function (executablePath) {
        require('child_process').exec('git branch', function (err, stdout) {
            pullRequestUrl += stdout.split(' ')[1];
            child(executablePath, [pullRequestUrl], function (err, data) {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        });
    }
};
