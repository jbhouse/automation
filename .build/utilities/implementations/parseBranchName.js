"use strict";
module.exports = {
    parseGitBranch: function parseGitBranch(branchList) {
        return branchList.filter((branchName) => branchName.includes("*"))[0].replace("* ", "");
    }
};
