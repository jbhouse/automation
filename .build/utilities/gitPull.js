"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = function (git) {
    var branchName = "develop";
    return {
        gitPull: function (workingDirectory, givenBranchName) {
            if (Boolean(givenBranchName)) {
                branchName = givenBranchName;
            }
            git(workingDirectory).raw(['pull', 'origin', branchName], function (err, result) {
                Boolean(result) ? console.log(result) : console.log(err);
            });
        }
    };
};
