"use strict";
var { execSync } = require("child_process");
module.exports = {
    listBranches: (cwd) => execSync("git branch -a", { cwd: Boolean(cwd) ? cwd : process.cwd(), encoding: "utf8" }).split("\n")
};
