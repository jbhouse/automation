"use strict";
var git = require('simple-git');
var currentWorkingDirectory = process.argv[2];
var commitMessage = "";
var branch = require('git-branch');
for (var i = 3; i < process.argv.length; i++) {
    commitMessage += (" " + process.argv[i]);
}
branch(currentWorkingDirectory)
    .then(function (name) {
    var branchName = name + ":" + commitMessage;
    git(currentWorkingDirectory).raw([
        'commit',
        '.',
        '-m',
        branchName
    ], function (err, result) {
        if (Boolean(result)) {
            console.log(result);
        }
        if (Boolean(err)) {
            console.log(err);
        }
    });
}) //=> 'master'
    .catch(console.error);
