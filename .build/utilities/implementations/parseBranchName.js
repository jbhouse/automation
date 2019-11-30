"use strict";
var { execSync } = require("child_process");
module.exports = {
    parseGitBranch: function parseGitBranch(cwd) {
        return execSync("git branch -a", { cwd, encoding: "utf8" }).split("\n").filter((branchName) => branchName.includes("*"))[0].replace("* ", "");
    }
};
