var { execSync } = require("child_process");

module.exports = {
    listBranches: function listBranches(cwd?: any) {
        if (!Boolean(cwd)) {
            cwd = process.cwd();
        }
        return execSync("git branch -a", { cwd, encoding: "utf8" }).split("\n");
    }
}