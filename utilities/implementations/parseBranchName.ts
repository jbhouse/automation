module.exports = {
    parseGitBranch: (branchListFunction: any, callback: any, workingDirectory?: string) => {
        let workingDir: string = Boolean(workingDirectory) && workingDirectory != undefined ? workingDirectory : process.cwd();
        branchListFunction(workingDir, parseBranchListForCurrentBranch(callback))
    }
}
function parseBranchListForCurrentBranch(callback: any) {
    return (branchList: string[]) => {
        let currentBranch = branchList.filter((branchName: string) => branchName.includes("*"))[0].replace("* ", "");
        callback(currentBranch);
    }
}