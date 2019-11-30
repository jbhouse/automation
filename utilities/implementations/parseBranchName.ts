
module.exports = {
    parseGitBranch: function parseGitBranch(cwd: any) {
        return require("child_process")("git branch -a", { cwd, encoding: "utf8" }).split("\n").filter((branchName: string) => branchName.includes("*"))[0].replace("* ", "");
    }
}
