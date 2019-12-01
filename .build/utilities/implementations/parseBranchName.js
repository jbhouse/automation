"use strict";
module.exports = {
    parseGitBranch: (branchList) => branchList.filter((branchName) => branchName.includes("*"))[0].replace("* ", "")
};
