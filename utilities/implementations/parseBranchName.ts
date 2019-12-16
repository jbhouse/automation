module.exports = {
    parseCurrentGitBranch: (branchList: string[]) =>
        branchList.filter((branchName: string) => branchName.includes("*"))[0].replace("* ", "")
}
