var { execSync } = require("child_process");

module.exports = {
    parseGitBranch: function parseGitBranch(cwd: any) {
        return execSync("git branch -a", { cwd, encoding: "utf8" }).split("\n").filter((branchName: string) => branchName.includes("*"))[0].replace("* ", "");
    }
}
