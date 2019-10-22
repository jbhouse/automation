export const init = (fs: any) => {
    let gitPull = require('../utilities/gitPull').init();
    let GitUrl = require('../utilities/GitUrl').init();
    let parseBranchName = require('../utilities/parseBranchName').init();
    let gitUpdate = require('../utilities/gitUpdate');
    let gitCommit = require('../utilities/gitCommit');
    let openPr = require('../utilities/openPR');
    var google = require('./google').init();
    var git = require('simple-git');
    return {
        update: (path: string) => gitUpdate.init(fs, git).gitUpdate(path)
        , pull: (workingDirectory: string, branchName: string) => gitPull.init(git).gitPull(workingDirectory, branchName)
        , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.init(git).gitCommit(workingDirectory, commitMessage)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, GitUrl.gitUrl())
        , openPR: (executablePath: string) => openPr.openPR(executablePath, GitUrl.gitUrl(), google.searchGoogle)
        , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
    }
}