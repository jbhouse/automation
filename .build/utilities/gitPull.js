"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (git) => {
    let branchName = "develop";
    return {
        gitPull: (workingDirectory, givenBranchName) => {
            if (Boolean(givenBranchName)) {
                branchName = givenBranchName;
            }
            git(workingDirectory).raw(['pull', 'origin', branchName], (err, result) => {
                Boolean(result) ? console.log(result) : console.log(err);
            });
        }
    };
};
