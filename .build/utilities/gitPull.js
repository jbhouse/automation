"use strict";
var git = require('simple-git');
var branchName = "develop";
module.exports = {
    gitPull: function (workingDirectory, givenBranchName) {
        if (Boolean(givenBranchName)) {
            branchName = givenBranchName;
        }
        git(workingDirectory).raw(['pull', 'origin', branchName], function (err, result) {
            Boolean(result) ? console.log(result) : console.log(err);
        });
    }
};
