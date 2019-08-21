"use strict";
var git = require('simple-git');
var branchName = "develop";
module.exports = {
    gitPull: function (workingDirectory, givenBranchName) {
        if (Boolean(givenBranchName)) {
            branchName = givenBranchName;
        }
        git(workingDirectory).raw([
            'pull',
            'origin',
            branchName
        ], function (err, result) {
            if (Boolean(result)) {
                console.log("git pull origin " + branchName);
                console.log(result);
            }
            if (Boolean(err)) {
                console.log(err);
            }
        });
    }
};
