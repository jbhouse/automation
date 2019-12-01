module.exports = {
    parseGitBranch: (branchList: string[]) =>
        branchList.filter((branchName: string) => branchName.includes("*"))[0].replace("* ", "")
}
