"use strict";
var git = require('simple-git');
let branchName = "develop";
module.exports = {
    gitPull: (workingDirectory, givenBranchName) => {
        if (Boolean(givenBranchName)) {
            branchName = givenBranchName;
        }
        git(workingDirectory).raw(['pull', 'origin', branchName], (err, result) => {
            Boolean(result) ? console.log(result) : console.log(err);
        });
    }
};
