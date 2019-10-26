export const init = (fs: any) => {
    const git = require('simple-git');
    const gitPull = require('../utilities/gitPull');
    const gitUrl = require('../utilities/GitUrl');
    const gitUpdate = require('../utilities/gitUpdate');
    const gitCommit = require('../utilities/gitCommit');
    const gitPopStash = require('../utilities/git-pop-stash-by-name');
    const parseBranchName = require('../utilities/parseBranchName');
    const openPr = require('../utilities/openPR');
    const google = require('./google');
    return {
        update: (path: string) => gitUpdate.init(fs, git).gitUpdate(path)
        , pull: (workingDirectory: string, branchName: string) => gitPull.init(git).gitPull(workingDirectory, branchName)
        , commit: (workingDirectory: string, commitMessage: string[]) => gitCommit.init(git).gitCommit(workingDirectory, commitMessage)
        , GitUrl: (executablePath: string) => google.searchGoogle(executablePath, gitUrl.gitUrl())
        , openPR: (executablePath: string) => openPr.openPR(executablePath, gitUrl.gitUrl(), google.searchGoogle)
        , parseBranch: (executablePath: string) => parseBranchName.parseGitBranch(executablePath)
        , popStashByName: (workingDirectory: string, stashName: string) => gitPopStash.init(git).popStash(workingDirectory, stashName)
    }
}