"use strict";
var git = require('simple-git');
var commitMessage = "";
var branch = require('git-branch');
module.exports = {
    gitCommit: function (currentWorkingDirectory, commit) {
        for (var i = 0; i < commit.length; i++) {
            commitMessage += (" " + commit[i]);
        }
        return branch(currentWorkingDirectory)
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
    }
};
