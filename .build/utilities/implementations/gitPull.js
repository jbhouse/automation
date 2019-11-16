"use strict";
module.exports = (git) => {
    return ({ "gitPull": gitPull });
    function gitPull(workingDirectory, givenBranchName) {
        git(workingDirectory).raw(['pull', 'origin', (Boolean(givenBranchName) ? givenBranchName : "develop")], (err, result) => Boolean(result) ? console.log(result) : console.log(err));
    }
};
