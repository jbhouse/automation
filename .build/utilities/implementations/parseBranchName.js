"use strict";
module.exports = {
    parseCurrentGitBranch: (branchList) => branchList.filter((branchName) => branchName.includes("*"))[0].replace("* ", "")
};
