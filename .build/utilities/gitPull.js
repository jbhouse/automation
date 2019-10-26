"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = (git) => {
    return {
        gitPull: (workingDirectory, givenBranchName) => git(workingDirectory).raw(['pull', 'origin', (Boolean(givenBranchName) ? givenBranchName : "develop")], (err, result) => Boolean(result) ? console.log(result) : console.log(err))
    };
};
