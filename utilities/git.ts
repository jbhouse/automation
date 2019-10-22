export const init = (fs: any) => {
    const git = require('simple-git');
    const gitPull = require('../utilities/gitPull').init(git);
    const gitUrl = require('../utilities/GitUrl');
    const parseBranchName = require('../utilities/parseBranchName');
    const gitUpdate = require('../utilities/gitUpdate');
    const gitCommit = require('../utilities/gitCommit');
    const openPr = require('../utilities/openPR');
    const google = require('./google');
    return {
        update: (path: string) => gitUpdate.init(fs, git).gitUpdate(path)
        , pull: (workingDirectory: string, branchName: string) => gitPull.init(git).gitPull(workingDirectory, branchName)
        , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.init(git).gitCommit(workingDirectory, commitMessage)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, gitUrl.gitUrl())
        , openPR: (executablePath: string) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle)
        , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
    }
}