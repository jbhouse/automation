"use strict";
module.exports = {
    parseGitBranch: (branchListFunction, callback, workingDirectory) => {
        let workingDir = Boolean(workingDirectory) && workingDirectory != undefined ? workingDirectory : process.cwd();
        branchListFunction(workingDir, parseBranchListForCurrentBranch(callback));
    }
};
function parseBranchListForCurrentBranch(callback) {
    return (branchList) => {
        let currentBranch = branchList.filter((branchName) => branchName.includes("*"))[0].replace("* ", "");
        callback(currentBranch);
    };
}
