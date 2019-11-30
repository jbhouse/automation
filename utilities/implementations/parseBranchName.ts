module.exports = {
    parseGitBranch: function parseGitBranch(branchList: string[]) {
        return branchList.filter((branchName: string) => branchName.includes("*"))[0].replace("* ", "");
    }
}
